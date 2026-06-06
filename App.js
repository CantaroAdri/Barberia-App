import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { CarritoProvider } from "./component/carritoContext/CarritoContext";

import HomeScreen from "./screen/homeScreen";
import ProductosScreen from "./screen/productosScreen";
import CarritoScreen from "./screen/carritoScreen";
import ReservaScreen from "./screen/reservaScreen";


import {
  useFonts,
  InstrumentSerif_400Regular,
  InstrumentSerif_400Regular_Italic,
} from "@expo-google-fonts/instrument-serif";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // Aquí le asignas un "apodo" a la fuente para usarla después
  const [fontsLoaded] = useFonts({
    MiLetraElegante: InstrumentSerif_400Regular,
    "Instrument-Italic": InstrumentSerif_400Regular_Italic,
  });
  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <CarritoProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
              name="home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="productos"
              component={ProductosScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="bag" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="carrito"
              component={CarritoScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cart" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Reserva"
              component={ReservaScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="pencil" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </CarritoProvider>
    </SafeAreaProvider>
  );
}
