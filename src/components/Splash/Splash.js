
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


export default class Splash extends Component{

    performinTimeConsumingTask = async()=> {
      return new Promise((resolve) => {
          setTimeout(
            ()=> {resolve('result')},
            3000
          )
        })
    }

  async componentDidMount(){
    const data = await this.performinTimeConsumingTask();
    if(data !== null){
     this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
       <Image
          style={styles.logo}
          source={require('../../images/logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo:{
    width:200,
    height:200,
    justifyContent: 'center'
}
});
