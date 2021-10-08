import * as React from 'react';
import {Text,View,Image,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
function peliculas({ navigation }){
    return(
        <>
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.titulo}>Comedia</Text>
            <ScrollView horizontal>

                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'X2m-08cOAbc'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/free-guy.jpg')}/>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'e01NVCveGkg'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/grown-ups.jpg')}/>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'1Fg5iWmQjwk'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/hotel-budapest.jpg')}/>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'oDU84nmSDZY'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/mean-girls.jpg')}/>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'CwXOrWvPBPk'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/shrek.jpg')}/>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'olXYZOsXw_o'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/space-jam.jpg')}/>
                </View>
                </TouchableOpacity>

            </ScrollView>
        </View>

        <View style={styles.container}>
        <Text style={styles.titulo}>Accion</Text>
            <ScrollView horizontal>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'36mnx8dBbGE'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/casino-royale.jpg')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'mw2AqdB5EVA'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/fast.jpg')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'TcMBFSGVi1c'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/index.jpg')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'V75dMMIW2B4'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/lotr.jpg')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'5UnjrG_N8hU'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/star-wars.jpg')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'k64P4l2Wmeg'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/terminator.jpg')}/>
                </View>
                </TouchableOpacity>
            </ScrollView>
        </View>

        <View style={styles.container}>
        <Text style={styles.titulo}>Romance</Text>
            <ScrollView horizontal>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'Z-nyXX5zOLg'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/anna-karenina.jpg')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'SfZWFDs0LxA'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/fifty-shades.jpg')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'954b9vLAT6Y'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/photograph.jpg')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'1dYv5u6v55Y'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/pride-prejudice.jpg')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'kVrqfYjkTdQ'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/titanic.jpg')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Trailer', {idtrailer:'RHtluksWi44'})}}>
                <View>
                    <Image style={styles.pelicula} source={require('../img/peliculas/twilight.jpg')}/>
                </View>
                </TouchableOpacity>

            </ScrollView>
        </View> 
        </ScrollView>           
        </>
    );
}

const styles = StyleSheet.create({
    pelicula:{
        width:175,
        height:250,
        marginRight:10
    },
    container:{
        marginHorizontal:10

    },
    titulo:{
        fontWeight:'bold',
        fontSize:24,
        marginVertical:10
    }
});


export default peliculas;