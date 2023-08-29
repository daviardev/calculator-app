import { styles } from './src/styles/HomeStyles.js'

import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App () {
  return (
    <View style={styles.container}>
      <Text>Calculator App</Text>
      <StatusBar style='auto' />
    </View>
  )
}
