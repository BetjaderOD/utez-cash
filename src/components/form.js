import React from 'react'
import {Text, TextInput, View, StyleSheet}  from 'react-native'
import  RNPickerSelect from 'react-native-picker-select'
import colors from '../utils/colors'

export default function  Form (props)  {
  // console.log(props);
  const {setCantidad, setInteres, setPlazos} = props
  return (
   <>
    <View  style={styles.viewForm}>
      <View style={styles.viweInputs}>
        <TextInput placeholder='cantidad a pedir'
        keyboardType='numeric'
        style={styles.inputs}
        onChange={(e)=>setCantidad(e.nativeEvent.text)}
        />
        <TextInput
        placeholder='Interes %'
        keyboardType='numeric'
        style={[styles.inputs,{width:'40%', marginLeft:5}]}
        onChange={(e)=>setInteres(e.nativeEvent.text)}

        />
      </View>   
        <RNPickerSelect
        style={selectStyle}

        placeholder={{
          label:'selecciona los meses...',
          value:null,
        }}
        useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setPlazos(value)}
            items={[
                { label: '3 meses', value: '3' },
                { label: '6 meses', value: '6' },
                { label: '12 meses', value: '12' },
                { label: '24 meses', value: '24' },
            ]}
        />

    </View>
    </>
   
  )
}

const styles = StyleSheet.create({

    viewForm:{
        bottom:0,
        width:'85%',
        paddingHorizontal:40,
        backgroundColor:colors.C_PRMARIO_O,
        height:200,
        justifyContent:'center',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        position:'absolute'
    },
    viweInputs:{
        flexDirection:'row' 
    },
    inputs:{
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:colors.C_PRMARIO_Ro,
        borderRadius:5,
        width:'60%',
        marginLeft:-5,
        marginRight:4,
        paddingLeft:20,
        paddingRight:20,
        color:colors.C_PRMARIO_Ro,
        // position:'absolute',
        height:50,
    }
})

const selectStyle = StyleSheet.create({
  inputAndroid:{
    backgroundColor:'#FFF',
    marginTop:10,
    fontSize:16,
    padding:10,
    borderWidth:0.5,
    borderColor:colors.C_PRMARIO_Ro,
    borderRadius:6,
    paddingRight:25,
    color:'black'
  },
  inputIOS:{
    backgroundColor:'#FFF',
    marginTop:10,
    fontSize:16,
    padding:10,
    borderWidth:0.5,
    borderColor:colors.C_PRMARIO_Ro,
    borderRadius:6,
    paddingRight:25,
    color:'black',

  }
})

