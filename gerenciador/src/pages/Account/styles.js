import {StyleSheet, Dimensions} from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'flex-start',
        alignItems:'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }, 
    actionsContainer:{
        width:'80%',
        marginTop:'10%',
    },
    header:{
        textAlign:'center',
        fontSize:24,
        marginTop:'10%',
        fontWeight:'bold',
    }
})