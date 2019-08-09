import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import HomeListItem from "./HomeListItem";
import { connect } from "react-redux";

class HomeListRepos extends Component {
  getData=()=>{
    this.props.getData();
  }
  render() {
    
    return (
      <View style={styles.container}>
       <FlatList
          data={this.props.task.taskdatarepos}
          refreshing={this.props.loading}
          onRefresh={this.getData}
          keyExtractor={this.keyExtractor}
          renderItem={({item, index}) => {
            return (
              <HomeListItem
                item={item}
                index={index}
                countallrepos={this.props.countallrepos}
                loadmore={this.props.loadmore}
                {...this.props}
              />
            );
          }}
        />
       
      </View>
    );
  }
  keyExtractor = (item, index) => index.toString ();
}


const mapStatetoProps = state => {
  return {
    task: !state.taskReducers ? [] : state.taskReducers
  };
};

export default connect( mapStatetoProps) (HomeListRepos);
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    minHeight:100,
    marginBottom:250
  },
  
});
