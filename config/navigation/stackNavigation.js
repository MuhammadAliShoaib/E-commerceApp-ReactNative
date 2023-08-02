import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/forms/login';
import Signup from '../../screens/forms/signup';
import Register from '../../screens/forms/register';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="Signup"
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
