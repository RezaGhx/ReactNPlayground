import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
// import icon from 'assets';

export default function App() {
  const handlePress = () => {
    alert('hala yarom bia');
    // styles.container.backgroundColor = 'maroon';
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Baba boro dorosteh Baba boro eeeeeeeeeeeeeeee
        Baba boro dorosteh Baba boro dorosteh
      </Text>
      <Image onPress={handlePress} source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/1/200/300',
      }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // textColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
