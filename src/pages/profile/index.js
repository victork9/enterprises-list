import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

function profile() {
    const { infosUser } = useSelector(
        (state) => state.enterpriseReducer,
    );
    console.log(infosUser)
    return (
        <>
            <View style={{ margin: 40, width: "90%", marginHorizontal: 16, padding: 10, borderRadius: 10, borderWidth: 1, borderColor: "blue" }}>
                <Text style={{ textAlign: "center", color: "black" }}>{infosUser.investor.investor_name}</Text>
                <Text style={{ textAlign: "left", color: "black" }}>{infosUser.investor.country}, {infosUser.investor.city}</Text>
                <Text style={{ textAlign: "left", color: "black" }}>{infosUser.investor.email}</Text>
                <Text style={{ textAlign: "left", color: "black" }}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(infosUser.investor.balance)}

                </Text>

            </View>
        </>
    )
}

export default profile;