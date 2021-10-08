import * as React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import peliculas from './components/peliculas';
import series from './components/series';
import proximamente from './components/proximamente';
import trailer from './components/trailer';

const Tab = createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Peliculas') {
                      iconName = focused
                        ? 'film'
                        : 'film-outline';
                    } else if (route.name === 'Series') {
                      iconName = focused ? 'tv' : 'tv-outline';
                    }else if (route.name === 'Proximamente') {
                      iconName = focused ? 'videocam' : 'videocam-outline';
                    }
        
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: '#3284ce',
                  tabBarInactiveTintColor: 'gray',
                })}
      >
        <Tab.Screen name="Peliculas" component={peliculas} />
        <Tab.Screen name="Series" component={series} />
        <Tab.Screen name="Proximamente" component={proximamente} />
        <Tab.Screen name="Trailer" component={trailer} options={{tabBarButton: () => null,tabBarVisible: false,}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
})
