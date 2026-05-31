import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import CustomHeader from "../component/customHeader/customHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import { CarritoContext } from '../component/carritoContext/CarritoContext';


const CarritoScreen = () => {
  const { carrito } = useContext(CarritoContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <CustomHeader title="Carrito" />
        {/* <Text style={styles.welcome}>¡Carrito de compras!</Text> */}
        <Text> aquí aparecerán los productos: {carrito ? carrito.length : 0}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1 },

  welcome: { textAlign: "center", 
    marginTop: 20, 
    fontSize: 18 },

  boton: {
    backgroundColor: '#1aa559',
  },

  input: {
    height: 50,
    backgroundColor: '#ec0a0a',
    color: '#ffffff',
    fontSize: 20,
  },

});

export default CarritoScreen;
