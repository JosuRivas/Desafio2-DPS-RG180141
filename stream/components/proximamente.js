import React, {useState,useCallback,useRef} from 'react';
import {Text,View,Image,StyleSheet,ScrollView,Button,Alert} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

function proximamente({ navigation }){

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
            if (state === "ended") {      
                setPlaying(false);      
                Alert.alert("El trailer ha finalizado");    
            }  
        }, []);
    const togglePlaying = useCallback(() => {    
      setPlaying((prev) => !prev);  
    }, []);

    return(
        <>
        <ScrollView>
        <View style={styles.container}>
            <View>
                <YoutubePlayer 
                 height={240}
                    play={playing}
                    videoId={"8g18jFHCLXk"}
                    onChangeState={onStateChange}
                />
                <Text style={styles.info}>
                    Titulo: Dune{"\n"}{"\n"}
                    Descripcion: Arrakis, también denominado "Dune", se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar.{"\n"}{"\n"}
                    Fecha de estreno: Octubre 2022{"\n"}{"\n"}
                </Text>
            </View>

            <View>
                <YoutubePlayer 
                 height={240}
                    play={playing}
                    videoId={"bSDKdjLlFxE"}
                    onChangeState={onStateChange}
                />
                <Text style={styles.info}>
                    Titulo: The Witcher temporada 2{"\n"}{"\n"}
                    Descripcion: El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.{"\n"}{"\n"}
                    Fecha de estreno: 17 de Diciembre 2021{"\n"}{"\n"}
                </Text>

            </View>

            <View>
                <YoutubePlayer 
                 height={240}
                    play={playing}
                    videoId={"H6ntKAoIsLE"}
                    onChangeState={onStateChange}
                />
                <Text style={styles.info}>
                    Titulo: The book of Boba Fett{"\n"}{"\n"}
                    Descripcion: Es parte de la franquicia Star Wars y un spin-off de The Mandalorian que presenta al cazarrecompensas Boba Fett de esa serie y otros medios esa franquicia{"\n"}{"\n"}
                    Fecha de estreno: Diciembre 2021{"\n"}{"\n"}
                </Text>

            </View>

            <View>
                <YoutubePlayer 
                 height={240}
                    play={playing}
                    videoId={"rt-2cxAiPJk"}
                    onChangeState={onStateChange}
                />
                <Text style={styles.info}>
                    Titulo: Spiderman No Way Home{"\n"}{"\n"}
                    Descripcion: Secuela de "Spider-Man: Lejos de casa" basada en los cómics de Stan Lee y Steve Ditko.{"\n"}{"\n"}
                    Fecha de estreno: 17 de Diciembre 2021{"\n"}{"\n"}
                </Text>

            </View>

            

        </View>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    info:{
        fontSize:20,

    }
})

export default proximamente;