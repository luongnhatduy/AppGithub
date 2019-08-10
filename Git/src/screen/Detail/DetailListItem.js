import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Page_repo } from "../../redux/action";
import NavigationService from "../../routers/NavigationService"
class DetailListItem extends Component {
  Loadmore = () => {
    this.setState({}, this.props.loadmore);
    this.props.Page_repo(this.props.task.taskpagerepo + 1);
  };
 
  render() {
    
    return (
      <View>
        <View style={styles.item}>
          <Text style={styles.txt}>{this.props.item.login}</Text>
        </View>

        {this.props.data.length == this.props.task.taskstar ? (
          <View />
        ) : (
          <View>
            {this.props.index == this.props.data.length  - 1 ? (
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
    Page_repo: taskpagerepo => dispatch(Page_repo(taskpagerepo))
  };
};
export default connect(
  mapStatetoProps,
  mapDispatToProps
)(DetailListItem);
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
 
  
});
