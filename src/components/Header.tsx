import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    Text,
    Image,
    View, TouchableOpacity, Alert
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {AntDesign, FontAwesome5} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/core';

import userImg from '../assets/profile.jpg';
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header(){
    const [username, setUsername] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const navigation = useNavigation();

    useEffect(() => {
        async function loadStorageUsername() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUsername(user || '');
        }

        loadStorageUsername();

    }, [username]);

    useEffect(() => {
        async function loadStoragePhoto() {
            const photo = await AsyncStorage.getItem('@plantmanager:user_photo');
            setImage(photo || '');
        }

        loadStoragePhoto();

    }, [image]);

    return(
        <View style={styles.container}>
            <View style={[styles.container, styles.viewInfo]}>
                <View>
                    <Text style={styles.greeting}>Olá,</Text>
                    <Text style={styles.userName}>{username}</Text>
                </View>
                {!image &&
                    <View style={styles.layer}>
                        <AntDesign name="camera" size={40} color={colors.green_dark} style={styles.iconLayer}/>
                    </View>
                }
                {image !== '' && <Image source={{ uri: image }} style={styles.img} />}
            </View>
            <TouchableOpacity style={styles.icon} activeOpacity={0.8} onPress={() => navigation.navigate('EditUser')}>
                <FontAwesome5 name="edit" size={14} color={colors.green_dark} />
                <Text style={styles.iconText}>Editar</Text>
            </TouchableOpacity>
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
    viewInfo: {
        marginTop: 30
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
    },
    icon: {
        position: "absolute",
        left: 0,
        top: 30,
        flexDirection: "row",
        backgroundColor: colors.shape,
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10

    },
    iconText: {
        fontSize: 14,
        color: colors.green_dark
    },
    layer: {
        backgroundColor: colors.gray,
        width: 70,
        height: 70,
        borderRadius: 40
    },
    iconLayer: {
        textAlign: "center",
        textAlignVertical: "center",
        lineHeight: 70
    },

});