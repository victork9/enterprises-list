import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Platform, Modal, Keyboard } from 'react-native';
import { dataServicePost } from '../../services/services'
import background from '../../../images/imageBackground.png'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setInfoUser } from '../../store/actions/enterprise.action'
import Spinner from 'react-native-loading-spinner-overlay'
import ModalMessage from '../../components/ModalMessage'
import { CommonActions, useNavigation } from '@react-navigation/native';
function login() {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const { infosUser } = useSelector(
        (state) => state.enterpriseReducer,
    );
    const [email, setEmail] = useState('testeapple@ioasys.com.br');
    const [password, setPassword] = useState('12341234');
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);


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
        setLoading(true)
        const REQ = {
            uri: '/users/auth/sign_in',
            data: {
                "email": email,
                "password": password
            }
        }

        dataServicePost(REQ).then((response) => {


            dispatch(setInfoUser(response.data))
            axios.defaults.headers.common = {
                ['access-token']: response.headers['access-token'],
                client: response.headers.client,
                uid: response.headers.uid
            };
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'ListEnterprise' },

                    ],
                })
            );
            setLoading(false)

        }).catch((error) => {
            setMessage(error)
            setModalVisible(true)
            setLoading(false)

        })
    }
    return (
        <View style={{ flex: 1, }} onTouchStart={() => { Keyboard.dismiss() }}>
            <Spinner
                visible={loading}
                textContent={"Loading ..."}
                textStyle={{ color: 'white' }}

                size={"large"}
                color={'white'}
            />
            <ModalMessage onPress={() => { setModalVisible(!modalVisible) }} message={message} visible={modalVisible} />
            <Image
                style={styles.image}
                source={require('../../../images/logo_ioasys.png')}
            />
            <ImageBackground source={background} style={styles.ImageBackground}>


                <TextInput
                    value={email}
                    placeholder={"Email"}
                    placeholderTextColor={"grey"}
                    onChangeText={(value) => {
                        setEmail(value)
                    }}
                    style={styles.inputCenter}
                />

                <TextInput
                    value={password}
                    placeholder={"Password"}
                    placeholderTextColor={"grey"}
                    onChangeText={(value) => {
                        setPassword(value)
                    }}
                    style={[styles.inputCenter, {
                        marginTop: 10, borderTopLeftRadius: 0,
                        borderTopRightRadius: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
                    }]}
                />
                <TouchableOpacity onPress={Auth} style={styles.buttonAuth}>

                    <Text style={{ textAlign: 'center' }}> Entrar</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

    inputCenter: {

        width: '80%',
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    buttonAuth: {
        marginTop: 16,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        width: '50%',
        justifyContent: 'center',
        padding: 10
    },
    image: {
        width: 200,
        height: 60,
        position: 'absolute',
        resizeMode: 'contain',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        zIndex: 10,
        alignSelf: 'center'
    },
    ImageBackground: {
        flex: 1,
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default login;