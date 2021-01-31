import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MOCK_TYPES_SERVICES } from '../helpers/index'
import { AntDesign } from '@expo/vector-icons';
const ModalMocks = ({ visible, ...props }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={false}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}

            >
                <View style={[styles.centeredView, { flex: 1 }]}>

                    <View style={styles.modalView}>
                        <AntDesign style={{ position: "absolute", right: 5, top: 5 }} name={"close"} onPress={() => {
                            setModalVisible(!modalVisible)
                        }} size={30} />
                        <Text style={styles.modalText}>Choice a type enterprise</Text>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ width: "90%" }}>
                            {MOCK_TYPES_SERVICES.map((item, index) => {
                                return (
                                    <TouchableHighlight
                                        key={index}
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                        onPressIn={() => {
                                            setModalVisible(!modalVisible)

                                        }}
                                        onPress={(id) => {
                                            props.onPress(item.id);
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
    );
};

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

export default ModalMocks;