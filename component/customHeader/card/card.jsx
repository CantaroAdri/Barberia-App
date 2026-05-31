import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";

import { CarritoContext } from "../../carritoContext/CarritoContext";

function Card() {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const productos = [
    {
      id: "1",
      nombre: "Cera ",
      precio: 1500,
      imagen: require("./../../../img/cera.webp"),
      stock: 3,
    },
    {
      id: "2",
      nombre: "Tijera",
      precio: 1200,
      imagen: require("./../../../img/tijera.webp"),
      stock: 0,
    },
    {
      id: "3",
      nombre: "Navaja",
      precio: 2200,
      imagen: require("./../../../img/navaja.webp"),
      stock: 5,
    },
    {
      id: "4",
      nombre: "Maquina para Pelo",
      precio: 13000,
      imagen: require("./../../../img/corta-pelo.webp"),
      stock: 0,
    },
    {
      id: "5",
      nombre: "Rebaja Barba",
      precio: 1700,
      imagen: require("./../../../img/rebaja-barba.webp"),
      stock: 1,
    },
    {
      id: "6",
      nombre: "Gel para Cabello",
      precio: 3400,
      imagen: require("./../../../img/Gel.webp"),
      stock: 2,
    },
    {
      id: "7",
      nombre: "Fijador",
      precio: 8000,
      imagen: require("./../../../img/fijador.webp"),
      stock: 0,
    },
  ];

  return (
    <View>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* AQUÍ ADENTRO VA EL DISEÑO DE TU TARJETA */}
            <Text style={styles.nombreProducto}>{item.nombre}</Text>
            <Text style={styles.precioProducto}> {"$" + item.precio}</Text>

            <Image source={item.imagen} style={styles.imgProducto} />

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
    textShadowColor: "#0505057a", // Un poco de sombra para leer mejor
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
