/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Navigation from './source/Navigation'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigation);
