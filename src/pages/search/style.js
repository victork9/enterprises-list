import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
    },
    viewRow: {
        flexDirection: 'row',
        marginTop: 20,
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        justifyContent: "space-between"
    },
    inputText: {
        borderRadius: 30,
        marginLeft: 16,
        width: '80%',
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,

    }
});
