import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../utils/colors'

export default function BtnCalculate(props) {
console.log(props);
const { fncal } = props
  return (
    <View style={styles.viewCalculate}>
      <TouchableOpacity style={styles.touchable}
      onPress={fncal}
      
      >
      <Text style={styles.btnTitle}>Calcular</Text>
      </TouchableOpacity>
   
    </View>
  )
}


const styles = StyleSheet.create({
  btnTitle:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    color:'white'
  },
  touchable:{
    padding:15,
    borderRadius:18,
    width:'80%',
    backgroundColor:colors.C_PRMARIO_O
  },
  viewCalculate:{
  height:120,
  backgroundColor:colors.C_PRMARIO_M,
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  alignItems:'center',
  justifyContent:'center',
  width:'100%',
  bottom:0,
  position:'absolute'
}
})