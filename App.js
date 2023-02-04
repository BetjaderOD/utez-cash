import { SafeAreaView, StyleSheet, Text, View, StatusBar, Button} from 'react-native';

import colors from './src/utils/colors'
import  Form   from './src/components/form';

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar barStyle={'light-content'}/>
      <SafeAreaView style={styles.saveArea}>
        <Text style={styles.titleApp}>Utez Cash</Text>
       <Form/>
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
  resultados2:{
  fontSize: 30
  },
  saveArea:{
    backgroundColor:colors.C_PRMARIO_M,
    height:200,
    alignItems:'center',
    width:'100%',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
  },
  titleApp:{
fontSize:30,
fontWeight:'900',
color:'#fff',
marginTop:15,
}
});