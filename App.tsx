import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import Loading from './Loading';
import Login from './Login';
import Main from './Main';
import SignUp from './SignUp';

// create our app's navigation stack
const App: NavigationContainer = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default createAppContainer(App)