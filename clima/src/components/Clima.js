import React,{useEffect, useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import {Card} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Clima = ({resultado}) =>{
    const [info,setInfo] = useState([]);
    const [nombre,setNombre] = useState([]);
    const [climaActual,setClima] = useState([]);
    const [temperatura,setTemp] = useState([]);
    const [minimo,setMinimo] = useState([]);
    const [maximo,setMaximo] = useState([]);
    const [humedad,setHumedad] = useState([]);
    const [viento,setViento] = useState([]);

    useEffect(()=>{
        
        setInfo(resultado);
        Object.values(info).map(() => {
            setNombre(info.name);
            setClima(info.weather[0].description);
            setTemp(info.main.temp);
            setMinimo(info.main.temp_min);
            setMaximo(info.main.temp_max);
            setHumedad(info.main.humidity);
            setViento(info.wind.speed);
        });
    });

    return(
       <Card>
           <Ionicons name="location" color="#e5e10f" size={25} style={{marginLeft:75}}>
                <Card.Title>{nombre}</Card.Title>
           </Ionicons>
           <Card.Divider />
           <View style={{justifyContent:'center',marginHorizontal:80,marginVertical:0}}>
                <Ionicons name='thermometer' color='#e7420f' size={30}>
                    <Text>{temperatura}°C</Text>
                </Ionicons>
               
                <Text style={style.data}>{climaActual}</Text>
                <Text style={style.data}>Mínimo: {minimo}°C</Text>
                <Text style={style.data}>Máximo: {maximo}°C</Text>
                <Text style={style.data}>Humedad: {humedad}%</Text>
                <Text style={style.data}>Viento: {viento} km/h</Text>
           </View>
       </Card> 
    );
};

export default Clima;

const style = StyleSheet.create({
    data:{
        marginLeft:15,
        fontSize:17,
    }
})