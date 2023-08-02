import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home';
import ProductDetails from '../../screens/productDetails';
import Cart from '../../screens/cart';
const Stack = createStackNavigator();

function HomeStack() {
  return (
      <Stack.Navigator initialRouteName="HomeStack">
        <Stack.Screen name="HomeStack" options={{
          headerTitle:"Home",
          headerShown:false
        }} component={Home}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails}/>
      </Stack.Navigator>
  );
}

export default HomeStack;
