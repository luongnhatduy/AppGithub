import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import HomeListRepos from "./HomeListRepos";
import apis from "../../libraries/networking/apis";
import { connect } from "react-redux";
import { Datarepos, Page } from "../../redux/action";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      loading: false,
      check : false,
      data: [],
      countallrepos:'',
      countreposloaded:''
    };
  }
  handleuser = txt => {
    this.setState({
      user: txt
    });
    this.props.Page(1);
  };
  componentDidMount() {
    this.props.Datarepos(this.state.data);
  }
  getCountPublicRepos = () => {
    apis
      .fetch(apis.PATH.USER + "/" + this.state.user)
      .then(res => {
        this.setState({
          countallrepos:res.public_repos
        })
      })
      .catch(err => {
        console.log(err, "loi");
      });
  };
  getRepos = () => {
    apis
      .fetch( apis.PATH.USER + "/" + this.state.user +"/repos" )
      .then(res => {
        if (res.length > 0) {
          this.props.Datarepos(res);
          this.setState({
            loading: false
          });
        }
      })
      .catch(err => {
        this.setState({
          loading: false
        });
        console.log(err, "loi");
      });
  };
  loadmore = () =>{
    this.setState({
      loading: true,
      check : true
    });
    apis
      .fetch( apis.PATH.USER + "/" + this.state.user +"/repos?page=" + this.props.task.taskpage + "&per_page=30" )
      .then(res => {
        if (res.length > 0) {
          this.props.Datarepos(this.props.task.taskdatarepos.concat(res));
          this.setState({
            loading: false
          });
        }
      })
      .catch(err => {
        this.setState({
          loading: false
        });
        console.log(err, "loi");
      });
  }
  getData = () => {
    this.props.Page(1);
    this.setState({
      loading: true,
      check : true
    });
    this.getCountPublicRepos();
    this.getRepos();
  };

  render() {
    console.log(this.props.task.taskdatarepos, "data");
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.viewSearch}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Search"
              placeholderTextColor="#888888"
              autoCapitalize="none"
              onChangeText={this.handleuser}
            />
          </View>
          <TouchableOpacity style={styles.btload} onPress={this.getData}>
            <Text style={styles.txtload}>ok</Text>
          </TouchableOpacity>
        </View>
        {this.state.check === true && this.state.loading === false ? 
          <View>
            <Text style={styles.txtcount}>Count public repos : {this.state.countallrepos}</Text>
            <Text style={styles.txtcount}>Count repos loaded : {this.props.task.taskdatarepos.length}</Text>
          </View>
          :<View/>}
        <HomeListRepos
          countallrepos={this.state.countallrepos}
          loading={this.state.loading}
          getData={this.getData}
          loadmore={this.loadmore}
        />
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
    Datarepos: taskdatarepos => dispatch(Datarepos(taskdatarepos)),
    Page: taskpage => dispatch(Page(taskpage))
  };
};
export default connect(
  mapStatetoProps,
  mapDispatToProps
)(HomeScreen);
const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    paddingHorizontal: 10,
    height: 40
  },
  viewSearch: {
    width: "80%",
    borderRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: "white"
  },
  btload: {
    width: "15%",
    borderRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: "#5A8F73",
    justifyContent: "center",
    alignItems: "center"
  },
  txtcount:{
    fontSize:16,
    margin:10
  }
});
