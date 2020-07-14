import {StyleSheet, Dimensions} from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }, 
    actionsContainer:{
        width:'80%',
    }
})