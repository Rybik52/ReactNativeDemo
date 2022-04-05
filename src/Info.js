import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";

export const Info = props => {
    return(
        <View style={styles.info}>
            <Image source={require("./Frame-2.png")}
                   style={{ width: 185, height: 30,}} />
            <Text style={styles.caption}>Умный помощник для развития бизнес - команд</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        flex: 1,
        alignItems: 'center',
        marginTop: 120,
        width: 380,

    },
    caption: {
        textAlign: 'center',
        margin: 10,
        fontSize: 20,
        color: '#3F3F3F',
        // fontWeight: '400'
    },
    img: {

    }
});