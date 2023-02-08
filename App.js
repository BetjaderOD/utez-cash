import { SafeAreaView, StyleSheet, Text, View, StatusBar, Button} from 'react-native';

import colors from './src/utils/colors'
import  Form   from './src/components/form';
import { useState } from 'react';
import BtnCalculate from './src/components/btnCalculate';

export default function App() {
  const [cantidad, setCantidad] = useState(null)
  const [interes, setInteres] = useState(null)
  const [plazos, setPlazos] = useState(null)
  const calcular = ()=>{
    console.log(`cant: ${cantidad}`);
    console.log(`int: ${interes}`);
    console.log(`pla: ${plazos}`);
  }
  return (
    <View style={styles.container}>
       <StatusBar barStyle={'light-content'}/>

      <SafeAreaView style={styles.saveArea}>
        <View  style={styles.comodin}/>

        <Text style={styles.titleApp}>Utez Cash</Text>
       <Form 
       setCantidad={setCantidad}
       setInteres={setInteres}
       setPlazos={setPlazos}
       />
      </SafeAreaView>
      <View>
        {/* <Text style={styles.resultados}>Resultados</Text>
      </View>
      <View>
        <Text style={[styles.resultados,styles.resultados2,{fontWeight:'900'}]}>BOTON</Text> */}
        {/* <Button
        style={[styles.resultados,styles.resultados2,{fontWeight:'900'}]}
        title="Saludo"
        onPress={() => alert('Buenos dias')}
      /> */}
       <BtnCalculate/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  resultados:{
    color: colors.C_PRMARIO_R
  },
  saveArea:{
    height:300,
    alignItems:'center',
  },
  titleApp:{
fontSize:30,
fontWeight:'900',
color:'#fff',
marginTop:15,
},
comodin:{
    height:200,
    width:'100%',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    backgroundColor:colors.C_PRMARIO_M,
    position:'absolute',
    zIndex:-1
  
}
});