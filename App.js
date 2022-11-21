import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { updateLocale } from 'moment';

//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

<div className='header'>

  <h2>Business Update</h2>
      
</div>

export default function App() {

  return (

    <NavigationContainer >
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: "#000",
      marginTop: 100,
      tabBarItemStyle: {marginTop: 50},
      tabBarInactiveTintColor: 'gray',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarLabelStyle: {marginBottom: 0},
      tabBarIconStyle: {marginTop: 18},
      tabBarItemStyle: { height: 100 },
      //tabBarShowLabel: false,
      tabBarActiveBackgroundColor: "#023e7d",
      tabBarInActiveBackgroundColor: { backgroundColor: 'gray' },
      tabBarStyle: { backgroundColor: 'white' },
      tabBarIndicatorStyle: { backgroundColor: '#706F60' , height: 5},
      tabBarIndicatorContainerStyle: { backgroundColor: '#bdb77c' },
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        //to not display the header 
        headerShown: false,
        //headerTitle: "Business Update",
        //headerStatusBarHeight: 20,
        //headerBackgroundContainerStyle: "gray",
        tabBarIcon: () => <Entypo name="home" size={20} color="black" />
        
      }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: () => <FontAwesome name="search" size={20} color="black" />
      }}/>
    </Tab.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  NavigationContainer: {
    marginTop: 50,
    paddingStart: 0
  }



});
