import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screen/Home/HomeScreen';
import DetailScreen from '../screen/Detail/DetailScreen'
const MainNavigator = createStackNavigator({
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
