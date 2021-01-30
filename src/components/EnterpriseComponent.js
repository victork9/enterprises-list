import React from 'react';
import { View, Text, Image } from 'react-native';

const Enterprisecomponents = ({ item }) => {
    return (

        <View style={{ width: '90%', marginHorizontal: 20, borderRadius: 10, marginVertical: 16, padding: 10, backgroundColor: '#6495ED' }}>
            <View style={{ flexDirection: 'row', }}>
                <View>
                    <Image
                        style={{ width: 100, height: 100, borderRadius: 50 }}
                        source={{ uri: `https://empresas.ioasys.com.br${item.item.photo}` }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }}>{item.item.enterprise_name}</Text>
                    <Text style={{ textAlign: 'left', marginLeft: 10, marginTop: 5 }}>{item.item.city}, {item.item.country}</Text>
                    <Text style={{ textAlign: 'left', marginLeft: 10, marginTop: 5 }}>{item.item.enterprise_type.enterprise_type_name}</Text>
                    <Text numberOfLines={2} style={{ textAlign: 'left', marginLeft: 10, marginTop: 5, }}>{item.item.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default Enterprisecomponents;