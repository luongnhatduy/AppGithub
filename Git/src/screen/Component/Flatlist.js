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
import HomeListItem from "../Home/HomeListItem";
import { connect } from "react-redux";
import DetailListItem from "../Detail/DetailListItem";

class Flatlist extends Component {
  getData=()=>{
    this.props.getData();
  }
  render() {
    let data = this.props.countallrepos ? this.props.task.taskdatarepos : this.props.data
    let item_render= this.props.countallrepos ? this.render_home : this.render_detail
    return (
      <View style={styles.container}>
       <FlatList
          data={data}
          refreshing={this.props.loading}
          onRefresh={this.getData}
          keyExtractor={this.keyExtractor}
          renderItem={item_render}
        />  
      </View>
    );
  }

  render_home=({item, index}) => {
    return (
      <HomeListItem
        item={item}
        index={index}
        countallrepos={this.props.countallrepos}
        loadmore={this.props.loadmore}
        {...this.props}
      />
    );
  }

  render_detail=({item, index}) => {
    return (
      <DetailListItem
        item={item}
        index={index}
        data={this.props.data}
        loadmore={this.props.loadmore}
        {...this.props}
      />
    );
  }
  keyExtractor = (item, index) => index.toString ();
}


const mapStatetoProps = state => {
  return {
    task: !state.taskReducers ? [] : state.taskReducers
  };
};

export default connect( mapStatetoProps) (Flatlist);
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    minHeight:100,
    marginBottom:20,
    flex:1
  },
  
});
