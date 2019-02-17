import { StyleSheet } from 'react-native'

export const color = {
  beSpreeOrange: '#E94E3E',
  beSpreeTeal: '#009E91',
}

export const authStyles = StyleSheet.create({
  bottomLink: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headline: {
    color: color.beSpreeTeal,
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

export const commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  horizView: {
    flex: 1,
    flexDirection: 'row',
  },
})
