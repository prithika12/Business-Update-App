import React from "react";
import { View, StyleSheet, Text, SafeAreaView} from "react-native";
import Article from "../components/Article";

//creating a constant for homescreen
const HomeScreen = () => {
    return (
        <SafeAreaView style={StyleSheet.container}>
            <Article/>
        </SafeAreaView>
        )
}

//export homescreen
export default HomeScreen; 

//creating a constant for styles
const styles = StyleSheet.create({
    container:{

    }
})