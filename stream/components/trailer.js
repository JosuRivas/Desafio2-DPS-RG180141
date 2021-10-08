import React, {useState,useCallback,useRef} from 'react';
import {Text,View,Image,StyleSheet,ScrollView,Button,Alert} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

function trailer({ route, navigation}){

    const {idtrailer} = route.params;

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
        <View>
                <YoutubePlayer 
                 height={240}
                    play={playing}
                    videoId={idtrailer}
                    onChangeState={onStateChange}
                />
        </View>
        </>
    )
}



export default trailer;