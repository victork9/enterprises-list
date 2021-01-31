import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import styles from './style'
// import { Container } from './styles';

function profile() {
    const navigation = useNavigation()
    const { infosUser } = useSelector(
        (state) => state.enterpriseReducer,
    );
    console.log(infosUser)
    function logout() {
        Alert.alert('Atenção', `Deseja sair?`,

            [
                { text: 'Cancelar', onPress: () => console.log('Cancelar') },
                {
                    text: 'OK', onPress: () => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [
                                    { name: 'Login' },

                                ],
                            })
                        );
                    }
                }

            ],
            { cancelable: false });
    }
    return (
        <>
            <View style={styles.view}>
                <Text style={[styles.description, { textAlign: "center", }]}>{infosUser.investor.investor_name}</Text>
                <Text style={styles.description}>Location: <Text style={{ fontWeight: "400" }}>{infosUser.investor.country}, {infosUser.investor.city}</Text></Text>
                <Text style={styles.description}>Email: <Text style={{ fontWeight: "400" }}>{infosUser.investor.email}</Text></Text>
                <Text style={styles.description}>Balance: <Text style={{ fontWeight: "400" }}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(infosUser.investor.balance)}

                </Text>
                </Text>

            </View>

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={() => { logout() }} style={styles.button}>
                    <Text style={{ color: "white", textAlign: "center" }}>Sair</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


export default profile;