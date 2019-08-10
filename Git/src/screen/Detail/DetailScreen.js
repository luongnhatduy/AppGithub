import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Header from "../Component/Header";
import Flatlist from "../Component/Flatlist";
import apis from "../../libraries/networking/apis";
import {Page_repo } from "../../redux/action";

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    };
  }
  componentDidMount() {
    this.getData();
    this.props.Page_repo(1);
  }

  getData = () => {
    let user = this.props.task.taskuser;
    let repo = this.props.navigation.state.params.name;
    apis
      .fetch(apis.PATH.REPO + user + "/" + repo + "/stargazers")
      .then(res => {
        this.setState({
          loading: false,
          data: res
        });
        console.log(res, "datarepos");
      })
      .catch(err => {
        this.setState({
          loading: false
        });
        console.log(err, "loi");
      });
  };
  loadmore = () => {
    let user = this.props.task.taskuser;
    let repo = this.props.navigation.state.params.name; 
    this.setState({
      loading: true
    });
    apis
      .fetch( apis.PATH.REPO + user +"/"+ repo + "/stargazers?page=" + this.props.task.taskpagerepo + "&per_page=30" )
      .then(res => {
        this.setState({
          loading: false,
          data : this.state.data.concat(res)
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
        console.log(err, "loi");
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Header text="Detail Repo" />
        <View style={styles.viewFlatlist} >
          <Flatlist
            style={styles.flatlist}
            data={this.state.data}
            loading={this.state.loading}
            getData={this.getData}
            loadmore={this.loadmore}
          />
        </View>
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
export default connect(mapStatetoProps,mapDispatToProps)(DetailScreen);
const styles = StyleSheet.create({
  container: {
   
    flex:1
  },
  viewFlatlist:{
    margin: 15,
    flex:1
  },
  flatlist:{
  
    flex:1
  }
});
