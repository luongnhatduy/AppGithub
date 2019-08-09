import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Datarepos, Page } from "../../redux/action";

class HomeListItem extends Component {
  Loadmore = () => {
    this.setState({}, this.props.loadmore);
    this.props.Page(this.props.task.taskpage + 1);
  };
  render() {
   
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.txt}>{this.props.item.name}</Text>
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
      </TouchableOpacity>
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
    Page: taskpage => dispatch(Page(taskpage))
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
    borderTopWidth: 0.5
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
  }
});
