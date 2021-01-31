import React from 'react';
import { View, Text, Image } from 'react-native';

const Enterprisecomponents = ({ item }) => {
    return (

        <View style={{
            flex: 1,
            width: '90%',
            margin: 16,
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
            <View style={{ flexDirection: 'row', }}>
                <View style={{ justifyContent: "center" }}>
                    <Image
                        style={{ width: 100, marginTop: 10, height: 100, borderRadius: 50 }}
                        source={{ uri: `https://empresas.ioasys.com.br${item.item.photo}` }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: "bold" }}>Enterprise name:
                    <Text style={{ color: 'black', fontWeight: "400" }}>{item.item.enterprise_name}</Text>
                    </Text>
                    <Text style={{ textAlign: 'left', marginLeft: 10, marginTop: 5, fontWeight: "bold" }}>Location:
                    <Text style={{ color: 'black', fontWeight: "400" }}>{item.item.city}, {item.item.country}</Text>
                    </Text>
                    <Text style={{ textAlign: 'left', marginLeft: 10, marginTop: 5, fontWeight: "bold" }}>Enterprise type:
                    <Text style={{ color: 'black', fontWeight: "400" }}>{item.item.enterprise_type.enterprise_type_name}</Text>
                    </Text>
                    <Text numberOfLines={2} style={{ textAlign: 'left', marginLeft: 10, marginTop: 5, fontWeight: "bold" }}>Description:
                    <Text style={{ color: 'black', fontWeight: "400" }}>{item.item.description}</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Enterprisecomponents;