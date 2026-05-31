import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import CustomHeader from "../component/customHeader/customHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {

  


  return (
    <SafeAreaView style={{ flex : 1}}>
      <View style={styles.container}>
        <CustomHeader title="Inicio" />
        <Text style={styles.welcome}>Un concepto nuevo que mezcla un {"\n"}
        estilo moderno {"\n"} con las tecnicas de barberia {"\n"}de toda la vida.
        </Text>

        <View style = {styles.section}>
          <Text style = {styles.titulo}>Nuestra Historia</Text>
          <Text style = {styles.parrafo}>Desde 2004 nos dedicamos a transformar la imagen
            de nuestros clientes.
            Combinamos tradicion y tendencias modernas
          </Text>
          <Image
          source = {require ("../img/portada1.jpg")}
      style = {styles.portada1}
          />
        </View>


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
  container: { flex: 1 },
  welcome: { 
    textAlign: "center", 
    marginTop: 20, 
    fontSize: 20, 
    fontFamily: "Instrument-Italic",

    textShadowColor: 'rgba(96, 6, 114, 0.98)', // Sombra negra con transparencia
    textShadowOffset: { width: 4, height: 2 }, // Se mueve un poco a la izquierda y abajo
    textShadowRadius: 15, // Difuminado suave
  },
  section:{
    margin: 20,
    padding: 10,
    borderWidth: 2,           // Grosor
    borderColor: '#d4af37',   // Color dorado para tu barbería
    borderRadius: 15,

    backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: { width: 10, height: 10 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: "center",
  },
  parrafo: {
    textAlign: "center",
  },

  portada1: {    
    width: "100%",
    height: 150,

    padding:10,
  },

footer: {
    flexDirection: 'row',       // <-- Esta es la clave para ponerlos en línea
    justifyContent: 'center',    // Centra los iconos horizontalmente
    alignItems: 'center',        // Centra los iconos verticalmente
    paddingVertical: 20,         // Espacio arriba y abajo del footer
  },
});

export default HomeScreen;
