import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

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
            <View style={{
                marginTop: 30,
                margin: 20,
                backgroundColor: "#d9d9d9d9",
                borderRadius: 20,
                padding: 10,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            }}>
                <Text style={{ textAlign: "center", color: "black", fontWeight: "bold" }}>{infosUser.investor.investor_name}</Text>
                <Text style={{ textAlign: "left", color: "black", fontWeight: "bold" }}>Location: <Text style={{ fontWeight: "400" }}>{infosUser.investor.country}, {infosUser.investor.city}</Text></Text>
                <Text style={{ textAlign: "left", color: "black", fontWeight: "bold" }}>Email: <Text style={{ fontWeight: "400" }}>{infosUser.investor.email}</Text></Text>
                <Text style={{ textAlign: "left", color: "black", fontWeight: "bold" }}>Balance: <Text style={{ fontWeight: "400" }}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(infosUser.investor.balance)}

                </Text>
                </Text>

            </View>

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={() => { logout() }} style={{ width: "70%", padding: 10, alignSelf: "center", borderRadius: 20, borderWidth: 1, backgroundColor: "#6495ED" }}>
                    <Text style={{ color: "white", textAlign: "center" }}>Sair</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default profile;