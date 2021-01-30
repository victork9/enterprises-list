import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, } from 'react-native';

const components = ({ message, visible, ...props }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{ color: 'red', fontSize: 20, fontWeight: '800' }}>Atenção!</Text>
                    <Text style={{ fontWeight: '400', fontSize: 17 }}>{message}</Text>
                    <TouchableOpacity
                        style={{ ...styles.openButton }}
                        onPress={() => { props.onPress() }}
                    >
                        <Text style={styles.textStyle}>Fechar</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </Modal>
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
        borderWidth: 1,
        width: '50%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 20
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },

})

export default components;