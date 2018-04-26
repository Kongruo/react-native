import React from 'react';
import { 
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Amo!</Text>
        {/* <Image source={require('./dist/app_style.svg')} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
