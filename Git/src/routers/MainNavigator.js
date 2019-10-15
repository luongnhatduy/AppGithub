import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screen/Home/HomeScreen';
import DetailScreen from '../screen/Detail/DetailScreen';
import SplashScreen from "../screen/Splash/SplashScreen"
const MainNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: {
      header: null,
    },
  },
}
);
export default MainNavigator;
