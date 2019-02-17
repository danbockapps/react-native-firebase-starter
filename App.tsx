import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { createAppContainer, createSwitchNavigator, NavigationContainer, SafeAreaView } from 'react-navigation'
import Loading from './screens/Loading'
import Login from './screens/Login'
import Main from './screens/Main'
import RegisterActivities from './screens/register/RegisterActivities'
import RegisterGroups from './screens/register/RegisterGroups'
import SignUp from './screens/SignUp'
import { color } from './styles/Theme'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.beSpreeTeal,
  },
}

const AppContainer: NavigationContainer = createAppContainer(createSwitchNavigator(
  {
    Loading,
    Login,
    Main,
    RegisterActivities,
    RegisterGroups,
    SignUp,
  },
  {
    initialRouteName: 'Loading',
  },
))

export default class App extends React.Component {
  public render() {
    return (
      // SafeAreaView is so the content doesn't overlap the status bar.
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider theme={theme}>
          <AppContainer />
        </PaperProvider>
      </SafeAreaView>
    )
  }
}
