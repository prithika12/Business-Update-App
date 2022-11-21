import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image} from "react-native";

//creating a constant for Article 
const Article = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/*image*/}
            <Image source={{
                uri: "https://images.unsplash.com/photo-1632507127789-eb70cc8757af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            }}
            style= {styles.image}
            />

        {/*Title*/}
            <Text style={styles.title}>Stock Update Application using React Native</Text>



        </SafeAreaView>
 
        )  

}

//export Article 
export default Article ; 

//creating a constant for styles
const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center"
    },
    //provide the styles for the image
    image: {
        height: 200,
        width: "100%"
    },

    title: {
        fontSize: 15.2,
        fontWeight: "500",
        margin: 10
    }
})