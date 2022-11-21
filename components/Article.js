import React from "react";
import { View, StyleSheet, Text, Image, Pressable, ImageBackground} from "react-native";
import moment from "moment";
import * as WebBrowser from 'expo-web-browser'; 


//creating a constant for Article 
const Article = (props) => {

    const goToSource = () => {
        WebBrowser.openBrowserAsync(props.url);

    }

    //if condition to set a default image if there is no image found in the source

    let urlToImage = props.urlToImage;

        if (props.urlToImage === null) {
        urlToImage = "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
        }

    return (
        <Pressable style={styles.container} onPress = {goToSource}>
            {/*image*/}
            <Image source={{
                uri: urlToImage, 
            
            }}
 
            
            style= {styles.image}
            
           
        /> 
    

       
    
        <View style ={{padding: 15}}>

        

        {/*Title*/}
            <Text style={styles.title}>{props.title}</Text>

        {/*Description*/}
        {/*//<Text style = {styles.content}>Content: </Text>*/}
        <Text style={styles.description} numberOfLines={3}> 
            {props.description}
        </Text>

        {/* Create a view component*/}
        <View style ={styles.data} >
            
            {/*<Text style={styles.heading}> By: <Text style ={styles.author}> {props.author}</Text></Text>*/}
            <Text style = {styles.bywho}>Source: <Text style={styles.source}>{props.sourceName}</Text></Text>
            <Text style = {styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>

        </View>

        {/*source*/}
        <View style = {{marginTop: 10}}>
            {/*<Text style = {styles.bywho}>Source: <Text style={styles.source}>{props.sourceName}</Text></Text>*/}
        </View>
            
        </View>

        </Pressable>
 
        )  

}

//export Article 
export default Article ; 

//creating a constant for styles
const styles = StyleSheet.create({
    container:{
        width: "95%",
        alignSelf: "center",
        //borderRadius: 20,
        shadowOpacity: 0.5,
        //borderTopLeftRadius: 50,
        //borderTopRightRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        //backgroundColor: "#dee2e6",
        backgroundColor: "#ced4da",
        marginTop: 20,
        marginBottom: 0
    },
    //provide the styles for the image
    image: {
        height: 200,
        width: "100%",        
        //borderTopLeftRadius: 50,
        //borderTopRightRadius: 50,
        //borderRadius: 20,
    },

    title: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: 'Avenir-Heavy',
        marginTop: 4,
        padding: 1,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        borderRadius: 50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#dee2e6"
      
    },

    description: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: 'Avenir-Heavy',
        marginTop: 8,
        marginLeft: 2,
        marginStart: 3
    },

    data: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 10
    },

    heading: {
        fontFamily: 'Avenir-Light',
        fontWeight: "bold",
        fontSize: 15,
        color: "#706F60",


    },
    author: {
        fontWeight: "bold",
        fontFamily: 'Avenir-Light',
        color: "#706F60",
        fontSize: 15

    }, 

    date: {
        fontWeight: "bold",
        color: "#706F60",
        fontFamily: 'Avenir-Light',
        fontSize: 15,
        marginTop: 8,
        marginLeft: 3,
        marginBottom: 0
    },

    source: {
        color: "#706F60",
        fontWeight: "bold",
        fontFamily: 'Avenir-Light',
        fontSize: 15
    },

    content: {
        fontWeight: "bold",
        color: "#706F60",
        fontSize: 15,
        marginLeft: 60,
        margin: 0
     
    },
    bywho: {
        fontFamily: 'Avenir-Light',
        color: "#706F60",
        flexWrap: 'wrap',
        flex: 1,
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 3,
        marginTop: 0
    }
})