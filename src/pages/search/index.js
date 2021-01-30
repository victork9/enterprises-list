import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MOCK_TYPES_SERVICES } from '../../helpers/index'

function search() {

    return (
        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: "space-between" }}>
            <TextInput
                // ref={(input) => { secondTextInput = input; }}
                // value={email}
                placeholder={"Email"}
                placeholderTextColor={"grey"}
                onChangeText={(value) => {
                    // setEmail(value)
                }}
                style={{
                    marginLeft: 16,
                    width: '80%',
                    height: 50,
                    borderWidth: 2,
                    borderColor: 'black',
                    padding: 5,

                }}
            />
            <Text>
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(10000)}

            </Text>
            <AntDesign name={"filter"} onPress={() => { }} size={40} />
        </View>
    );
}

export default search;