import React from "react";
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import {getStatusBarHeight} from "react-native-iphone-x-helper";

import userImg from '../assets/profile.jpg';
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Carol</Text>
            </View>
            <Image source={userImg} style={styles.img} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        marginTop: getStatusBarHeight() //impede que a view fique por cima da barra de status do mobile
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }

});