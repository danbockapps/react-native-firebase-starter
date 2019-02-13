import { StyleSheet } from 'react-native'

const color = {
  beSpreeTeal: '#009E91',
  beSpreeOrange: '#E94E3E',
}

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizView: {
    flex: 1,
    flexDirection: 'row'
  },
  emptyView: {
    flex: 1
  },
  vertView: {
    flex: 7,
    flexDirection: 'column'
  },
  textInput: {
    marginBottom: 10,
  },
  bottomLink: {
    flex: 1
  }
})

export default { color, authStyles }