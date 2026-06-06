import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackActions } from "@react-navigation/native";
import HomeScreen from "../screen/homeScreen";
import ProductosScreen from "../screen/productosScreen";
import CarritoScreen from "../screen/carritoScreen";
import ReservaScreen from "../screen/reservaScreen";

const stack = createNativeStackNavigator();

<StackActions.Navigator>

    <stack.Screen name= "home" component = {HomeScreen}/>
    <stack.Screen name= "Productos" component = {ProductosScreen}/>
    <stack.Screen name= "Carrito" component = {CarritoScreen}/>
    <stack.Screen name= "Carrito" component = {ReservaScreen}/>
</StackActions.Navigator>