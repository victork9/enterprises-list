import React from 'react';
import { View, TextInput, Text, Modal, FlatList, Platform, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MOCK_TYPES_SERVICES } from '../../helpers/index'
import { dataServiceGet } from '../../services/services';
import { useState } from 'react';

import ModalMocks from '../../components/ModalMocks'
import Enterprisecomponents from '../../components/EnterpriseComponent';
import Spinner from 'react-native-loading-spinner-overlay';
function search() {
    const [enterpriseType, setEnterpriseType] = useState(null);
    const [termSearch, setTearmSearch] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dataEnterprises, setDataEnterprises] = useState([]);

    function searchEnterprise(id) {
        setEnterpriseType(id),
            setModalVisible(false);
        setLoading(true)
        const REQ = {
            uri: `/enterprises${id ? `?enterprise_types=${id}` : ""}${termSearch && enterpriseType ? `?enterprise_types=${enterpriseType}&name=${termSearch}` : termSearch ? `?name=${termSearch}` : ""}`
        }
        console.log(REQ)
        dataServiceGet(REQ).then((response) => {
            setDataEnterprises(response.enterprises)
            setLoading(false)
        }).catch(() => {
            setDataEnterprises([])
            setLoading(false)
        })
    }


    const cardEnterprise = (item) => {

        return (
            <Enterprisecomponents item={item} />
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <Spinner
                visible={loading}
                textContent={"Loading ..."}
                textStyle={{ color: 'white' }}

                size={"large"}
                color={'white'}
            />


            <View style={{ flexDirection: 'row', marginTop: 20, marginTop: Platform.OS === 'ios' ? 40 : 20, justifyContent: "space-between" }}>
                <TextInput
                    // ref={(input) => { secondTextInput = input; }}
                    // value={email}
                    onEndEditing={({ nativeEvent }) => { searchEnterprise() }}
                    placeholder={"Email"}
                    placeholderTextColor={"grey"}
                    onChangeText={(value) => {
                        setTearmSearch(value)
                    }}
                    style={{
                        borderRadius: 30,
                        marginLeft: 16,
                        width: '80%',
                        height: 50,
                        borderWidth: 2,
                        borderColor: 'black',
                        padding: 10,

                    }}
                />

                <AntDesign style={{ right: 5, top: 5 }} name={"filter"} onPress={() => { setModalVisible(true) }} size={40} />
            </View>
            {/* <ModalMocks visible={modalVisible} onPress={(id) => { searchEnterprise(id) }} /> */}

            <View >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}

                >
                    <View style={[styles.centeredView, { flex: 1 }]}>

                        <View style={styles.modalView}>
                            <AntDesign style={{ position: "absolute", right: 5, top: 5 }} name={"close"} onPress={() => {
                                setModalVisible(false)
                            }} size={30} />
                            <Text style={styles.modalText}>Choice a type enterprise</Text>
                            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "90%" }}>
                                {MOCK_TYPES_SERVICES.map((item, index) => {
                                    return (
                                        <TouchableHighlight
                                            key={index}
                                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}

                                            onPress={() => {
                                                searchEnterprise(item.id)
                                            }}
                                        >
                                            <Text style={styles.textStyle}>{item.enterprise_type_name}</Text>
                                        </TouchableHighlight>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

            </View>


            <FlatList
                style={{ marginTop: 10 }}
                data={dataEnterprises}
                renderItem={(cardEnterprise)}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 200
    },
    modalView: {
        height: "60%",
        width: "80%",
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
        marginTop: 20,
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginTop: 10,
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    }
});

export default search;