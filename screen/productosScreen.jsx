import React from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import CustomHeader from "../component/customHeader/customHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../component/customHeader/card/card";


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

    textShadowColor: 'rgba(96, 6, 114, 0.98)', 
    textShadowOffset: { width: 4, height: 2 }, 
    textShadowRadius: 15,
  },
  footer: {
    flexDirection: 'row',       
    justifyContent: 'center',  
    alignItems: 'center',        
    paddingVertical: 20,       
  },
});

export default ProductosScreen;
