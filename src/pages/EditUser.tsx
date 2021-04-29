import React, {useState, useEffect} from "react";
import {SafeAreaView, Text, TextInput, View, StyleSheet, Image, Platform} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import userImg from "../assets/profile.jpg";
import {RectButton} from "react-native-gesture-handler";
import fonts from "../styles/fonts";
import colors from "../styles/colors";
import {Button} from "../components/Button";
import {AntDesign} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function EditUser(){
    const [image, setImage] = useState<string>('');
    const [username, setUsername] = useState<string>('');

    useEffect(() => {
        async function loadStoragePhoto() {
            const photo = await AsyncStorage.getItem('@plantmanager:user_photo');
            setImage(photo || '');
        }

        loadStoragePhoto();

    }, [image]);

    useEffect(() => {
        async function loadStorageUsername() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUsername(user || '');
        }

        loadStorageUsername();

    }, [username]);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        await AsyncStorage.setItem('@plantmanager:user_photo', result.uri);

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Edite suas informações</Text>
                <RectButton style={styles.btn}
                            onPress={pickImage}
                >
                    <View style={styles.layer}>
                        <AntDesign name="camera" size={40} color={colors.green_dark} style={styles.icon} />
                    </View>
                    {/*{image !== undefined && <Image source={{ uri: image }} style={styles.img} />}*/}
                    <Text style={styles.btnText}>Upload de foto</Text>
                </RectButton>
                <TextInput
                    style={styles.input}
                    placeholder="Digite um nome"
                    value={username}
                />
            </View>
            <View style={styles.viewBtn}>
                <Button title="Salvar" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 54,
        marginTop: getStatusBarHeight() //impede que a view fique por cima da barra de status do mobile
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    btn: {
        alignItems: "center",
        position: "relative"
    },
    layer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 50,
        backgroundColor: colors.gray
    },
    icon: {
        textAlign: "center",
        textAlignVertical: "center",
        lineHeight: 70
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 50,
    },
    btnText: {
        marginTop: 15,
        color: colors.green_dark,
        backgroundColor: colors.shape,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    viewBtn: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})