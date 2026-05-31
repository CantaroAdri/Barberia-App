import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';


const CustomHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <ImageBackground

      source = {require ("../../img/cabecera2.webp")}
      style = {styles.cabecera}
      resizeMode="cover"
      >
        <Text style= {styles.textHeader}>Barber style</Text>
        
      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cabecera: {
    width: "100%",
    height: 150, // <--- CAMBIO CLAVE: Dale una altura fija en píxeles
    justifyContent: 'center', // Centra el texto verticalmente sobre la imagen
    alignItems: 'center',
  },
  textHeader: { 
    fontFamily: "Instrument-Italic",
    color : "#E3C754",
    fontSize : 28,
    textShadowColor: '#E3C754', // Un poco de sombra para leer mejor
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default CustomHeader;