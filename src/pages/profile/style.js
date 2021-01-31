import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    view: {
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
    },
    description: {
        textAlign: "left",
        color: "black",
        fontWeight: "bold"
    },
    button: {
        width: "70%",
        padding: 10,
        alignSelf: "center",
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: "#6495ED"
    }
})