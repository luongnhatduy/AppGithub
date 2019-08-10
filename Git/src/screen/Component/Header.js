import React, { Component } from "react";
import { Text, StyleSheet, View,TouchableOpacity,Image } from "react-native";
import images from "../../libraries/utils/images";
import NavigationService from '../../routers/NavigationService';

export default class Header extends Component {
  backScreen=()=>{
    NavigationService.pop();
  }  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewleft}>
          <TouchableOpacity onPress={this.backScreen} style={styles.btback}>
            <Image
              style={styles.imgback}
              source={images.back}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.textcenter}>
          {this.props.text}
        </Text>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      viewleft: {
        position: 'absolute',
        left: 10,
      },
      btback: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imgback: {
        width: 10,
        height: 20,
        tintColor: 'black'
      }, 
      textcenter: {
        fontWeight: 'bold',
        fontSize: 20,
        color : 'black'
      }, 
});
