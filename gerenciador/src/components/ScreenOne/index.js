import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import WavyHeader from './WavyHeader';

import logo from '../../assets/N08.png'

export default function ScreenOne() {
    return (
      <View style={styles.container}>
        <WavyHeader customStyles={styles.svgCurve} />
        <View style={styles.headerContainer}>
        
          <Image source = {logo} />
          <Text style={styles.headerText}>Gerenciador de podas</Text>
        </View>
        <View style={styles.triangle}></View>
       
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    marginTop: 35,
    marginHorizontal: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 20
  },
   svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  }
});