import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackActions } from "@react-navigation/native";
import HomeScreen from "../screen/homeScreen";
import ProductosScreen from "../screen/productosScreen";
import CarritoScreen from "../screen/carritoScreen";

const stack = createNativeStackNavigator();

<StackActions.Navigator>

    <stack.Screen name= "home" component = {HomeScreen}/>
    <stack.Screen name= "Productos" component = {ProductosScreen}/>
    <stack.Screen name= "Carrito" component = {CarritoScreen}/>
</StackActions.Navigator>