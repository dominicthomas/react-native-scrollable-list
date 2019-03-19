import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home'
import Details from './components/Details'

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details },
  }, {
    headerMode: 'none',
    initialRouteName: 'Home',
  });

const App = createAppContainer(MainNavigator);

export default App;

