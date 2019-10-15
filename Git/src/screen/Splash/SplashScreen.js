import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import NavigationService from "../../routers/NavigationService"
import images from "../../libraries/utils/images";

export default class SplashScreen extends Component {
    componentDidMount () {
        setTimeout (() => {
          this.nextScreen ();
        }, 1500);
      
    }
    nextScreen =()=>{
        NavigationService.reset("HomeScreen")
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={images.logo}
                    resizeMode= "stretch"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent :'center',
        alignItems:'center'
    },
    logo:{
        width: 250,
        height: 200
    }
})
