/* eslint-disable no-useless-concat, no-unused-vars */
import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import useShare from '@rnhooks/share';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function App() {
  const [onShare, shared, loading, error] = useShare();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhooks/share</Text>
      <Button title="Share" onPress={onShare} />
      {!(loading || error) && (
        <Text style={styles.instructions}>{shared.toString()}</Text>
      )}
    </View>
  );
}

export default App;
