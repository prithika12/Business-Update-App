import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList} from "react-native";
import Article from "../components/Article";
import axios from "axios";

//creating a constant for homescreen
const HomeScreen = () => {

    //create a state to re-render the compoenents 
    const [articles, setArticles] = useState([]);

    // create a function to get data from api 
    const getNews = () => {
        // Make a request for a user with a given ID
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d5b71fe17b3841c89383942f871625bc', {
            params: {
                category: "business"
            }
        })
        .then(function (response) {
        // handle success
        setArticles(response.data.articles);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
    }


    useEffect(() => {
        getNews();
    },[]);



    return (
        <SafeAreaView style={styles.container}>
         
         <FlatList

            //the data that we need to render
            data = {articles}
            //refer to each object as an item, and for each item we will diaplay an article
            renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                        url = {item.url}
                    
                    />}

                keyExtractor = {(item) => item.title}
            
         
         />
         



        </SafeAreaView>
        )
}

//export homescreen
export default HomeScreen; 

//creating a constant for styles
const styles = StyleSheet.create({
    container:{

        //backgroundColor: "#f3e9dc",
        backgroundColor: "#b7b4bd",

    }
})