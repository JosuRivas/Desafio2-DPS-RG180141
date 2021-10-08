import * as React from 'react';
import {Text,View,Image,StyleSheet,SafeAreaView,FlatList,TouchableOpacity,ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
function series({ navigation }){
    return(
    <>
    <ScrollView>
    <SafeAreaView style={styles.container}>
    <Text style={styles.titulo}>Comedia</Text>
    <FlatList
      data={[
        {
            titulo: 'The IT Crowd',
            temporadas:'4 temporadas',
            img: require("../img/series/it.jpg"),
            trailer: 'MwwTfkXk7U0'
            
        },
        {
            titulo: 'Modern Family',
            temporadas:'11 temporadas',
            img: require("../img/series/modern-family.jpg"),
            trailer:'jeX4SfsC9ws'
        },
        {
            titulo: 'The Simpsons',
            temporadas:'33 temporadas',
            img: require("../img/series/simpsons.jpg"),
            trailer:'HRV6tMR-SSs'
        },
        {
            titulo: 'South Park',
            temporadas:'24 temporadas',
            img: require("../img/series/south-park.jpg"),
            trailer:'uLrlLDLJpMo'
        },
        {
            titulo: 'The Office',
            temporadas:'9 temporadas',
            img: require("../img/series/the-office.jpg"),
            trailer:'2iKZmRR9AR4'
        },
        {
            titulo: 'Brooklyn 9-9',
            temporadas:'8 temporadas',
            img: require("../img/series/99.jpg"),
            trailer:'sEOuJ4z5aTc'
        },
               
      ]}
      renderItem={({item}) => (
        <Card containerStyle={styles.card}>
          <TouchableOpacity style={styles.row} onPress={()=> {navigation.navigate("Trailer",{idtrailer:item.trailer})}}>
            <Image source={item.img} style={styles.serie}/>
            <Text style={styles.titulo}>{"\n"}{item.titulo}{"\n"}{"\n"}{"\n"}{item.temporadas}</Text>
          </TouchableOpacity>
        </Card>
      )}
    />
  </SafeAreaView>

  <SafeAreaView style={styles.container}>
    <Text style={styles.titulo}>Aventura</Text>
    <FlatList
      data={[
        {
            titulo: 'Doctor Who',
            temporadas:'26 temporadas',
            img: require("../img/series/doctor-who.jpg"),
            trailer:'S5BgZf9Pmys'
        },
        {
            titulo: 'Game Of Thrones',
            temporadas:'8 temporadas',
            img: require("../img/series/got.jpg"),
            trailer:'KPLWWIOCOOQ'
        },
        {
            titulo: 'Vikings',
            temporadas:'6 temporadas',
            img: require("../img/series/vikings.jpg"),
            trailer:'9GgxinPwAGc'
        },
        {
            titulo: 'The Mandalorian',
            temporadas:'2 temporadas',
            img: require("../img/series/mandalorian.jpg"),
            trailer:'aOC8E8z_ifw'
        },
        {
            titulo: 'The Witcher',
            temporadas:'1 temporada',
            img: require("../img/series/witcher.jpg"),
            trailer:'ndl1W4ltcmg'
        },
        {
            titulo: 'The Walking Dead',
            temporadas:'11 temporadas',
            img: require("../img/series/twd.jpg"),
            trailer:'sfAc2U20uyg'
        },
               
      ]}
      renderItem={({item}) => (
        <Card containerStyle={styles.card}>
          <TouchableOpacity style={styles.row} onPress={()=> {navigation.navigate("Trailer",{idtrailer:item.trailer})}}>
            <Image source={item.img} style={styles.serie}/>
            <Text style={styles.titulo}>{"\n"}{item.titulo}{"\n"}{"\n"}{"\n"}{item.temporadas}</Text>
          </TouchableOpacity>
        </Card>
      )}
    />
  </SafeAreaView>

  <SafeAreaView style={styles.container}>
    <Text style={styles.titulo}>Fantasia</Text>
    <FlatList
      data={[
        {
            titulo: 'American Gods',
            temporadas:'3 temporadas',
            img: require("../img/series/american-gods.jpg"),
            trailer:'tPskXU-Tmgo'
        },
        {
            titulo: 'Lost',
            temporadas:'6 temporadas',
            img: require("../img/series/lost.jpg"),
            trailer:'KTu8iDynwNc'
        },
        {
            titulo: 'Outlander',
            temporadas:'5 temporadas',
            img: require("../img/series/outlander.jpg"),
            trailer:'PFFKjptRr7Y'
        },
        {
            titulo: 'Stranger Things',
            temporadas:'4 temporadas',
            img: require("../img/series/stranger-things.jpg"),
            trailer:'x7Yq9MJUqjY'
        },
        {
            titulo: 'Supernatural',
            temporadas:'15 temporadas',
            img: require("../img/series/supernatural.jpg"),
            trailer:'t-775JyzDTk'
        },
        {
            titulo: 'Westworld',
            temporadas:'3 temporadas',
            img: require("../img/series/westworld.jpg"),
            trailer:'9BqKiZhEFFw'
        },
               
      ]}
      renderItem={({item}) => (
        <Card containerStyle={styles.card}>
          <TouchableOpacity style={styles.row} onPress={()=> {navigation.navigate("Trailer",{idtrailer:item.trailer})}}>
            <Image source={item.img} style={styles.serie}/>
            <Text style={styles.titulo}>{"\n"}{item.titulo}{"\n"}{"\n"}{"\n"}{item.temporadas}</Text>
          </TouchableOpacity>
        </Card>
      )}
    />
  </SafeAreaView>
  </ScrollView>
  </>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    card: {
      backgroundColor: '#2089dc',
      padding: 20,
      marginVertical: 10,
      borderRadius: 10,
      justifyContent: 'center',
    },
    serie:{
        width:175,
        height:250,
        marginRight:10
    },
    row:{
        flex:1,
        flexDirection:'row'
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',

    }

  });

export default series;