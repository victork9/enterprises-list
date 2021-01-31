import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    inputCenter: {

        width: '80%',
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    buttonAuth: {
        marginTop: 16,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        width: '50%',
        justifyContent: 'center',
        padding: 10
    },
    image: {
        width: 200,
        height: 60,
        position: 'absolute',
        resizeMode: 'contain',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        zIndex: 10,
        alignSelf: 'center'
    },
    ImageBackground: {
        flex: 1,
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
    }

});
