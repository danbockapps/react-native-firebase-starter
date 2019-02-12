import React from 'react';
import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Loading from './Loading';
import Login from './Login';
import Main from './Main';
import SignUp from './SignUp';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#aabbff'
  }
}

const AppContainer: NavigationContainer = createAppContainer(createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
  },
  {
    initialRouteName: 'Loading'
  }
))

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    )
  }
}