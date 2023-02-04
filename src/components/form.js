import React from 'react'
import {Text, TextInput, View, StyleSheet}  from 'react-native'
import  RNPickerSelect from 'react-native-picker-select'
import colors from '../utils/colors'

export default function  Form ()  {
  return (
   <>
    <View  style={styles.viewForm}>
      <View style={styles.viweInputs}>
        <TextInput placeholder='cantidad a pedir'
        keyboardType='numeric'
        style={styles.inputs}
        />
        <TextInput
        placeholder='Interes %'
        keyboardType='numeric'
        style={[styles.inputs,{width:'40%', marginLeft:5}]}
        />
      </View>   
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />

      <Text>SELECT</Text>    
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
        color:'black',
        // position:'absolute',
        height:50,
    }
})

