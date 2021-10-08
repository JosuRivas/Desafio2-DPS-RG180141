import React,{useState} from 'react';
import {Text, TextInput, View, StyleSheet, TouchableWithoutFeedback,Animated, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';



const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {

    const {ciudad} = busqueda;
    const [animacionboton] = useState(new Animated.Value(1));
    

    const consultarClima = () =>{
        if (ciudad.trim() === '') {
            mostrarAlerta();return;
        }
        guardarConsultar(true);
    }

    const mostrarAlerta = () =>{
        Alert.alert('Error', 'Debe seleccionar un pais'),[{Text:'Entendido'}]
    }

    const animacionEntrada = () =>{
        Animated.spring(animacionboton,{
            toValue:.9,
            useNativeDriver:true
        }).start();
    }

    const animacionSalida = () => {
        Animated.spring(animacionboton,{
            toValue:1,
            useNativeDriver:true
        }).start();
    }
    
    const estiloAnimacion = {
    transform:[{
        scale:animacionboton
        }]
    }

    return(
        <>
        <View>
            <Text style = {styles.input}>Ciudades El Salvador</Text>
        </View>
        <View>
            <Picker 
            selectedValue={ciudad}
            onValueChange={ciudad=>guardarBusqueda({...busqueda,ciudad})}
            style = {styles.itempais}>
                <Picker.Item label="--seleccione una ciudad--" value=""/>
                <Picker.Item label="Aguilares" value="Aguilares"/>
                <Picker.Item label="Apopa" value="Apopa"/>
                <Picker.Item label="Ayutuxtepeque" value="Ayutuxtepeque"/>
                <Picker.Item label="Ciudad Delgado" value="Ciudad Delgado"/>
                <Picker.Item label="Cuscatancingo" value="Cuscatancingo"/>
                <Picker.Item label="El Paisnal" value="El Paisnal"/>
                <Picker.Item label="Guazapa" value="Guazapa"/>
                <Picker.Item label="Ilopango" value="Ilopango"/>
                <Picker.Item label="Mejicanos" value="Mejicanos"/>
                <Picker.Item label="Nejapa" value="Nejapa"/>
                <Picker.Item label="Panchimalco" value="Panchimalco"/>
                <Picker.Item label="Rosario de Mora" value="Rosario de Mora"/>
                <Picker.Item label="San Marcos" value="San Marcos"/>
                <Picker.Item label="San Martin" value="San Martin"/>
                <Picker.Item label="San Salvador" value="San Salvador"/>
                <Picker.Item label="Santiago Texacuangos" value="Santiago Texacuangos"/>
                <Picker.Item label="Santo Tomas" value="Santo Tomas"/>
                <Picker.Item label="Soyapango" value="Soyapango"/>
                <Picker.Item label="Tonacatepeque" value="Tonacatepeque"/>
                
            </Picker>
        </View>
        <TouchableWithoutFeedback
            onPressIn = {() => animacionEntrada()}
            onPressOut = {() => animacionSalida()}
            onPress={()=>consultarClima()}
        >
            <Animated.View style = {[styles.btnBuscar, estiloAnimacion]}>
                <Text style = {styles.textoBuscar}>Consultar Clima</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
        </>
    );
}


const styles = StyleSheet.create({

    input:{padding:10,
        height:50,
        fontSize:20,
        marginBottom:20,
        textAlign:'center',
        color :'#000'
        },
        itempais:{
        height:60,
        backgroundColor:'#fff',
        },
        btnBuscar:{
        marginTop:50,
        height:50,
        backgroundColor:'#000',
        fontSize:20,
        marginBottom:20,
        textAlign:'center'
        },
        textoBuscar:{
        color:'#fff',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:"center",
        fontSize:18
}
})

export default Formulario;