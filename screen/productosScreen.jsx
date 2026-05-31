import React from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import CustomHeader from "../component/customHeader/customHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../component/customHeader/card/card";
// import Contador from "../component/customHeader/counter/count";

const ProductosScreen = () => {


  return (
        <SafeAreaView style={{ flex : 1}}>
    
      <View style={styles.container}>
        <CustomHeader title="Productos" />
        <Text style = {styles.welcome}> 
          Productos con Identidad {"\n"} Barber Style!
        </Text>
        <Card/>
     

      <View style= {styles.footer}>
                  <Image 
                  source={require ("../img/icons-whatsapp.png")}/>
                  <Image 
                  source={require ("../img/icons-instagram.png")}/>
                  <Image 
                  source={require ("../img/icons-facebook.png")}/>
              </View>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  welcome: { 
      textAlign: "center", 
    marginTop: 20, 
    fontSize: 20, 
    fontFamily: "Instrument-Italic",

    textShadowColor: 'rgba(96, 6, 114, 0.98)', // Sombra negra con transparencia
    textShadowOffset: { width: 4, height: 2 }, // Se mueve un poco a la izquierda y abajo
    textShadowRadius: 15,
  },
  footer: {
    flexDirection: 'row',       // <-- Esta es la clave para ponerlos en línea
    justifyContent: 'center',    // Centra los iconos horizontalmente
    alignItems: 'center',        // Centra los iconos verticalmente
    paddingVertical: 20,         // Espacio arriba y abajo del footer
  },
});

export default ProductosScreen;
