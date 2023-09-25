import { Image, View } from 'react-native';
import { styles } from './App';


export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style={styles.logo} />

      <Text>ola</Text>
    </View>
  );
}
