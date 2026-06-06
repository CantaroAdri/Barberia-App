
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../../carritoContext/CarritoContext";
import { db } from "../../../firebase";
import { collection, onSnapshot } from "firebase/firestore";


function Card() {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const [productos, setProductos] = useState ([]);
  const [cargando, setCargando] = useState (true);

  useEffect(() => {
   
    const referenciaColeccion = collection(db, "productos");

   
    const desuscribir = onSnapshot(referenciaColeccion, (snapshot) => {
    
      const listaProductos = snapshot.docs.map(doc => ({
        id: doc.id,   
        ...doc.data()   
      }));
      setProductos(listaProductos);
      setCargando(false);
    });
    return () => desuscribir();
  }, []);
  if (cargando) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#77078d" />
      </View>
    );
  }


  return (
    <View style={styles.contenedorPrincipal} >
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
           
            <Text style={styles.nombreProducto}>{item.nombre}</Text>
            <Text style={styles.precioProducto}> {"$" + item.precio}</Text>

           <Image source={{ uri: item.image }} style={styles.imgProducto} />

            <Pressable
              style={({ pressed }) => [
                styles.botonBase,
                item.stock === 0
                  ? styles.botonAgotado
                  : pressed
                    ? styles.botonPresionado
                    : styles.botonNormal,
              ]}
              disabled={item.stock === 0}
              onPress={() => agregarAlCarrito(item)}
            >
              <Text style={styles.textComprar}>
                {item.stock === 0 ? "Agotado" : "comprar"}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    contenedorPrincipal: {
    flex: 1,
  },
  card: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",

    elevation: 3,

    shadowColor: "#080808",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  nombreProducto: {
    fontFamily: "Instrument-Italic",
    fontSize: 28,
    textShadowColor: "#0505057a",
    textShadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.05,
    textShadowRadius: 8,
    paddingHorizontal: 20,
  },
  precioProducto: {
    fontSize: 20,
  },
  imgProducto: {
    width: 80,
    height: 80,
  },
  textComprar: {
    color: "white",
    margin: 5,
    textAlign: "center",
    fontSize: 15,
  },

  botonBase: {
    elevation: 3,

    shadowColor: "#080808",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },

  botonNormal: {
    backgroundColor: "#77078d",
    borderRadius: 12,
    width: 150,
  },
  botonPresionado: {
    backgroundColor: "#a008b4",
    borderRadius: 12,
    width: 150,
  },
  botonAgotado: {
    backgroundColor: "#8b8b8b",
    borderRadius: 12,
    width: 150,
  },
});

export default Card;
