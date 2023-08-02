/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import UserProvider from './store/userContext/userProvider';
import store from './config/redux/store/store';
import { Provider } from 'react-redux';

const AppWithProvider = () => (
  <Provider store={store}>
    <UserProvider>
      <App />
    </UserProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithProvider);
