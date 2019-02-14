import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation'
import Loading from './screens/Loading'
import Login from './screens/Login'
import Main from './screens/Main'
import SignUp from './screens/SignUp'
import Theme from './styles/Theme'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Theme.color.beSpreeTeal,
  },
}

const AppContainer: NavigationContainer = createAppContainer(createSwitchNavigator(
  {
    Loading,
    Login,
    Main,
    SignUp,
  },
  {
    initialRouteName: 'Loading',
  },
))

export default class App extends React.Component {
  public render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    )
  }
}
