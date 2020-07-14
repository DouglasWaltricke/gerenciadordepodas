import { StyleSheet, Dimensions } from 'react-native';


export const defaultButton = {
    backgroundColor:'white',
        width:'70%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius:40,
}
export default StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:60,
        paddingRight:20,
    },
    actionsButton:{
        flex:2,
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:-30,
        // backgroundColor:'red'
    },
    inputLogin:{
        ...defaultButton,
        marginTop:15,
        height:50,
        paddingLeft:45
    },
    buttonLogIn:{
        ...defaultButton,
        height:54,
        marginTop:60,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonLogInText:{
        color:'#4CAF50',
        fontWeight:'bold',
        fontSize:16
    },
    backgroundLogin:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})