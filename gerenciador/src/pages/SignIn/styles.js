import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    signInButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent',
        padding:5,
        paddingTop:15, 
        paddingBottom:15,
        paddingLeft:25,
        paddingRight:25, 
        borderRadius:10,
        borderColor:"#8323A0",
        borderStyle: 'solid',
        borderWidth:1
    },
    signInButtonText:{
        fontSize:18,
        color:'#8323A0',
    },  
    signInContainer:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
    },
    signInActions:{
        flex:1,
        alignItems:'center',
        marginTop:100,
    },
    hiperTextButton:{
        fontSize:16, 
        fontWeight:'bold', 
        color:'#4CAF50'
    },
    specialButton:{
        paddingTop:15, 
        paddingBottom:15,
        paddingLeft:25,
        paddingRight:25, 
        borderRadius:10
    }
})

export default styles;