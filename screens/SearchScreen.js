import react, { useState } from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import Article from "../components/Article";
import SearchBar from "../components/SearchBar";
import axios from "axios";


const SearchScreen = () => {
    const [searchText, setSearchText] = useState("");
    const [articles, setArticles] = useState([]);

    //create a function to search articles based on user input 
    const searchArticles = () => {

        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d5b71fe17b3841c89383942f871625bc', {
            params: {
                category: "business",
                q: searchText

            }
        })
        .then( (response) => {
        // handle success
           //console.log(response.data.articles);
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



    return(

        <View style={styles.container}>
           <SearchBar searchText = {searchText} setSearchText = {setSearchText} onSubmit = {searchArticles}/>

          {/* <FlatList
            
            data = {articles}
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
            keyExtractor ={(item) => item.title}
            
            
            
            />
    */}

    { articles.length != 0 ? (
    <FlatList
                
                data = {articles}
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
                keyExtractor ={(item) => item.title}
    />
    ) : (
    <View>
    <Text style={styles.results} >No Search Results</Text>
    </View>

    ) }


           
        </View>



    )
}

export default SearchScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "fff",
    },

    results: {

        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 18,
        fontFamily: 'Avenir-Heavy',
        marginTop: 19



    }
})

