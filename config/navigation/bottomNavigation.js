import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Profile from '../../screens/profile';
import {NavigationContainer} from '@react-navigation/native';
import Cart from '../../screens/cart';
import Wishlist from '../../screens/wishlist';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeStack from './homeStack';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        tabBarActiveTintColor : "#CC1512",
        tabBarInactiveTintColor : 'black'
      }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({focused}) => <Icon name="home" color={focused? "#CC1512":'black'} size={30} />,
            headerShown:false
          }}
          component={HomeStack}
        />
        <Tab.Screen
          name="Wishlist"
          options={{
            tabBarIcon: ({focused}) => <Icon name="favorite" color={focused? "#CC1512":'black'} size={30} />
          }}
          component={Wishlist}
        />
        <Tab.Screen
          name="Cart"
          options={{
            tabBarIcon: ({focused}) => <Icon name="shopping-cart" color={focused? "#CC1512":'black'}size={30} />
          }}
          component={Cart}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({focused}) => <Icon name="person" color={focused? "#CC1512":'black'} size={30} />
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomNavigation;
