import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Image source={require('../images/welcome.jpg')} />
        <Text style={styles.textView}>HOME SCREEN</Text>
        <TouchableHighlight style={styles.footerView}>
          <Text style={styles.textViewLogout}></Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  textView: {
    fontSize: 30,
    textAlign: 'center',
  },
  footerView: {
    marginTop: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textViewLogout: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
});
