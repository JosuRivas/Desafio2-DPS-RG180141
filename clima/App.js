import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,Alert} from 'react-native';
import Formulario from './src/components/Formulario';
import Clima from './src/components/Clima';

export default function App(){
  const [busqueda,guardarBusqueda] = useState({
    ciudad:''
  });

  const [consultar,guardarConsultar] = useState(false);
  const [resultado,guardarResultado] = useState({});

  useEffect(()=>{
    const {ciudad} = busqueda;
    const consultarClima = async() =>{
      if (consultar) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},SV&appid=14823a8d43929be45858aa0035eb5c8f&units=metric&lang=es`;

        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);
        } catch (error) {
          mostrarAlerta(error);
        }
      }
    };
    consultarClima();
  },[consultar]);

  mostrarAlerta = (error) => {
    Alert.alert('Error',`${error}`),
    [{Text: 'Ok'}];
  };

  return(
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario 
        busqueda={busqueda} 
        guardarBusqueda={guardarBusqueda}
        guardarConsultar ={guardarConsultar}
        />
        <Clima resultado={resultado}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
  flex: 1,
  backgroundColor: 'rgb(71,149,212)',
  justifyContent: 'center',
  },
  contenido: {
  margin: '2.5%',
  },
  });