import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Datarepos, Page ,Star } from "../../redux/action";
import NavigationService from "../../routers/NavigationService"
class HomeListItem extends Component {
  Loadmore = () => {
    this.setState({}, this.props.loadmore);
    this.props.Page(this.props.task.taskpage + 1);
  };
  loadstargazers = () =>{
    let name = this.props.item.name;
    NavigationService.navigate('DetailScreen',{name})
    this.props.Star(this.props.item.stargazers_count);
  }
  render() {
    
    return (
      <View>
        <View style={styles.item}>
          <Text style={styles.txt}>{this.props.item.name}</Text>
          <View style={styles.right}>
              <View style={styles.star}>
                <Text style={styles.txtloadstar}>{this.props.item.stargazers_count} star</Text>
              </View>  
              <TouchableOpacity style={styles.star2} onPress={this.loadstargazers }>
                <Text style={styles.txtloadstar}>Load</Text>
              </TouchableOpacity>
          </View>    
        </View>

        {this.props.task.taskdatarepos.length == this.props.countallrepos ? (
          <View />
        ) : (
          <View>
            {this.props.index == this.props.task.taskdatarepos.length  - 1 ? (
              <TouchableOpacity style={styles.loadmore} onPress={this.Loadmore}>
                <Text style={styles.txtload}>Load More</Text>
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </View>
        )}
      </View>
    );
  }
}

const mapStatetoProps = state => {
  return {
    task: !state.taskReducers ? [] : state.taskReducers
  };
};
const mapDispatToProps = dispatch => {
  return {
    Page: taskpage => dispatch(Page(taskpage)),
    Star: taskstar => dispatch(Star(taskstar))
  };
};
export default connect(
  mapStatetoProps,
  mapDispatToProps
)(HomeListItem);
const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomColor: "#CCCCCC",
    borderTopColor: "#CCCCCC",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  txt: {
    fontSize: 16,
    maxWidth: "50%"
  },
  loadmore: {
    marginTop: 10,
    width: "100%",
    height: 40,
    borderRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: "#5A8F73",
    justifyContent: "center",
    alignItems: "center"
  },
  txtload: {
    color: "white",
    fontSize: 16
  },
  txtloadstar:{
    color: "gray",
    fontSize: 16
  },
  star:{
    borderRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: "white",
    padding: 5
  },
  star2:{
    left:10,
    borderRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: "#FFC63F",
    padding: 5
  },
  right:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  }
});
