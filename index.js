/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Index from "./Layout/Index"
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Index);
