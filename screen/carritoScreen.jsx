import React, { useContext } from "react";
// 1. Corregido: Importamos FlatList y Pressable que faltaban aquí
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../component/customHeader/customHeader";
import { CarritoContext } from "../component/carritoContext/CarritoContext";

const CarritoScreen = () => {
  
  const { carrito, eliminarDelCarrito, vaciarCarrito } =
    useContext(CarritoContext);

 
  const totalCompra = carrito.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.cantidad;
  }, 0);

 
  if (carrito.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <CustomHeader title="Carrito" />
        <View style={styles.contenedorVacio}>
          <Text style={styles.textoVacio}>Tu carrito está vacío 🛒</Text>
          <Text style={styles.subtextoVacio}>
            Pásate por la sección de productos para elegir lo que necesitas.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <CustomHeader title="Carrito" />

      <View style={styles.container}>
        <Text style={styles.titulo}>Resumen de tu compra</Text>

        <FlatList
          data={carrito}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemCarrito}>
              <View>
                <Text style={styles.nombreItem}>{item.nombre}</Text>
                <Text style={styles.detalleItem}>
                  ${item.precio} x {item.cantidad} u.
                </Text>
              </View>

              <Text style={styles.subtotalItem}>
                {"$" + item.precio * item.cantidad}
              </Text>
              <Pressable 
              onPress={() => eliminarDelCarrito(item.id)}>
                <Text style={{ color: "red" }}>Eliminar</Text>
              </Pressable>
            </View>
          )}
        />

      
        <View style={styles.contenedorTotal}>
          <Text style={styles.textoTotalLabel}>Total General:</Text>
          <Text style={styles.textoTotalNumero}>${totalCompra}</Text>
        </View>

       
        <Pressable
          style={styles.botonFinalizar}
          onPress={() => {
            alert("¡Compra confirmada!");
            vaciarCarrito();
          }}
        >
          <Text style={styles.textoBotonFinalizar}>Confirmar Compra</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  contenedorVacio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textoVacio: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtextoVacio: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  itemCarrito: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  nombreItem: {
    fontSize: 18,
    fontWeight: "600",
  },
  detalleItem: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  subtotalItem: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#77078d",
  },
  contenedorTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "#ddd",
    paddingVertical: 15,
    marginTop: 10,
  },
  textoTotalLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  textoTotalNumero: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#77078d",
  },
  botonFinalizar: {
    backgroundColor: "#77078d",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 15,
  },
  textoBotonFinalizar: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CarritoScreen;
