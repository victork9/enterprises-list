import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Platform, Modal } from 'react-native';
import { dataServicePost } from '../../services/services'
// import { Container } from './styles';
import background from '../../../images/imageBackground.png'
import logo from '../../../images/logo_ioasys.png'
import axios from 'axios';
function login() {
    const [email, setEmail] = useState('testeapple@ioasys.com.br');
    const [password, setPassword] = useState('12341234');
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    async function Auth() {
        if (email == '') {
            setMessage('Por favor insira o email')
            setModalVisible(true)
            return;
        } else if (password == '') {
            setMessage('Por favor insira a senha')
            setModalVisible(true)
            return;
        }
        const REQ = {
            uri: '/users/auth/sign_in',
            data: {
                "email": email,
                "password": password
            }
        }

        dataServicePost(REQ).then((response) => {

            console.log(response.data)
            // const { uid, client, } = response.headers
            //     const responseData = {
            //         data: response.data,
            //         uid,
            //         client,
            //         acessTokem: response.headers['access-token']
            //     }
            axios.defaults.headers.common = {
                ['access-token']: response.headers['access-token"'],
                client: response.client,
                uid: response.uid
            };

        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <View style={{ flex: 1, }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ color: 'red', fontSize: 20, fontWeight: '800' }}>Atenção!</Text>
                        <Text style={{ fontWeight: '400', fontSize: 17 }}>{message}</Text>
                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Fechar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Modal>
            <Image
                style={{ width: 200, height: 60, position: 'absolute', resizeMode: 'contain', marginTop: Platform.OS === 'ios' ? 40 : 20, zIndex: 10, alignSelf: 'center' }}
                source={require('../../../images/logo_ioasys.png')}
            />
            <ImageBackground source={background} style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', }}>


                <TextInput
                    value={email}
                    placeholder={"Email"}
                    placeholderTextColor={"grey"}
                    onChangeText={(value) => {
                        setEmail(value)
                    }}
                    style={{ width: '80%', height: 40, borderWidth: 2, borderColor: 'white', padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                />

                <TextInput
                    value={password}
                    placeholder={"Password"}
                    placeholderTextColor={"grey"}
                    onChangeText={(value) => {
                        setPassword(value)
                    }}
                    style={{ width: '80%', height: 40, borderWidth: 2, borderColor: 'white', padding: 5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: 10 }}
                />
                <TouchableOpacity onPress={Auth} style={{ marginTop: 16, borderWidth: 2, borderColor: 'white', borderRadius: 20, width: '50%', justifyContent: 'center', padding: 10 }}>

                    <Text style={{ textAlign: 'center' }}> Entrar</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        width: '50%',
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 20
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default login;