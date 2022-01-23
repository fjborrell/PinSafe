import {FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const DATA = [
    {
        id: "001",
        title: "Start Trip",
        image: "https://i.imgur.com/9lkORF7.png",
        screen: "Map",
    }, 
    {
        id: "002",
        title: "Contacts",
        image: "https://i.imgur.com/4rgWJKz.png",
        screen: "Contacts",
    },
];

const Selector = () => {
    return (
        <FlatList
            style = {styles.menu}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem = {({ item }) => (
                <TouchableOpacity
                    style = {{
                        padding: 4,
                        paddingLeft: 8,
                        paddingBottom: 8,
                        paddingTop: 8,
                    }}
                >
                    <View>
                        <Text style = {styles.text}> {item.title} </Text>
                        <Image
                            style = {{
                                width: 350,
                                height: 250,
                                resizeMode: "contain"
                            }}
                            source = {{
                                uri: item.image,
                            }}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default Selector;


const styles = StyleSheet.create({
    menu: {
        alignContent: "center",
    },
    text: {
        fontWeight: "bold",
        fontFamily: "Avenir",
        fontSize: 20,
    }

});

