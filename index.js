import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import TabNavigation from './TabNavigation';
import {name as appName} from './app.json';
import Login from './src/containers/Login'
import Splash from './src/containers/Splash';

AppRegistry.registerComponent(appName, () => Splash);
