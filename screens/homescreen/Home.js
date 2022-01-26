import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Selector from '../../components/Selector';

const Home = () => {
  return (
    <SafeAreaView style = {styles.background}>
      <Image 
        style = {{
            width: 200,
            height: 100,
            resizeMode: "contain",
        }}
        source = {
            require("../../assets/pinsafe.png")
        }
      />

      <Selector style = {styles.background}/>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    background: {
        justifyContent: "center",
        alignContent: "center",
    },
});
