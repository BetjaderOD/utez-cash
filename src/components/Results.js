import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

export default function Results(props) {
    // console.log(props);
    const {errors, cantidad, interes, plazos , prestamo} = props
  return (
    <View style={styles.viewResults}>
        {prestamo &&(
             <View style={styles.viewResumen}>
             <Text style={styles.titleResumen}>RESUMEN:</Text>
 
 
             {/* <View style={styles.info}>
                 <Text>Cantidada  a pedir:</Text>
                 <Text>{cantidad}</Text>
 
             </View> */}
             <Informacion label={'Cantidad a pedir: '} value={`$${cantidad}`}/>
             <Informacion label={'Intereses: '} value={`${interes}`}/>
             <Informacion label={'Plazos: '} value={`$${plazos}`}/>
             <Informacion label={'Pago por mes: '} value={`$${prestamo.pagoMes}`}/>
             <Informacion label={'Pago Total:'} value={`$${prestamo.pagoTotal}`}/>
             {/* <View  style={styles.info}>
                 <Text>Interes %:</Text>
                 <Text>{interes}</Text>
             </View>
             <View  style={styles.info}>
                 <Text>Plazos:</Text>
                 <Text>{plazos}</Text>
                 
             </View> */}
 
         </View>

        )}
       
        <View>
         <Text style={styles.error}>{errors}</Text>
        </View>
             
    </View>
  )
}
function Informacion(props) {
    const {label, value} = props;
    return(

    <View style={styles.info}>
        <Text>{label}</Text>
        <Text>{value}</Text>

   </View>
    )
}

const styles = StyleSheet.create({
    error:{
        color:colors.C_PRMARIO_R,
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',

    },
    viewResults:{
        marginTop:10,
        marginHorizontal:40
    },
    titleResumen:{
        fontSize:20,
        textAlign:'center',
        marginBottom:10,
        fontWeight:'bold'
    },
    viewResumen:{
        padding:30
    },
    info:{
        flexDirection: 'row',
        marginBottom:20,
        justifyContent:'space-between'
    }


})