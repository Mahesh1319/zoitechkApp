/**
 * This is the navbar component
 * example of usage:
 *   var left = (<Left><Button transparent><Icon name='menu' /></Button></Left>);
 *   var right = (<Right><Button transparent><Icon name='menu' /></Button></Right>);
 *   <Navbar left={left} right={right} title="My Navbar" />
 **/

// React native and others libraries imports
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Title, Left, Right, Icon } from 'native-base';

// Our custom files and classes import
import Colors from '../asset/Colors';
//npm install native-base react-native-svg@12.1.1 react-native-safe-area-context@3.3.2

/*export default class CustomHeader extends Component {
  render() {
    return(
     
    );
  }
}*/

const CustoHeader = (props) => {
  return (
    <Header
      style={{ backgroundColor: Colors.primaryColour }}
      backgroundColor={Colors.primaryColour}
      androidStatusBarColor={Colors.sucess}
      noShadow={true}
    >
      {props.left ? props.left : <Left style={{ flex: 1 }} />}
      <Body style={styles.body}>
        <Title style={styles.title}>{props.title}</Title>
      </Body>
      {props.right ? props.right : <Right style={{ flex: 1 }} />}
    </Header>
  )
}

export default CustoHeader

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    color: 'white'
  }
});
