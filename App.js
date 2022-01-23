import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Alert, Image, View, TouchableHighlight, SafeAreaView, Button} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Home from './screens/homescreen/Home';

export default function App() {

  return (
    <SafeAreaView style = {styles.container}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    justifyContent: 'center',
    alignItems: "center",
  }
});
