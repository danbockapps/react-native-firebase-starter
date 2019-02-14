import { StyleSheet } from 'react-native'

const color = {
  beSpreeOrange: '#E94E3E',
  beSpreeTeal: '#009E91',
}

const authStyles = StyleSheet.create({
  bottomLink: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emptyView: {
    flex: 1,
  },
  headline: {
    color: color.beSpreeTeal,
  },
  horizView: {
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: 10,
  },
  vertView: {
    flex: 7,
    flexDirection: 'column',
  },
})

export default { color, authStyles }
