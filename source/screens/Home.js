import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.mainView}>
        <Image source={require('../images/welcome.jpg')} />
        <Text style={styles.textView}>HOME SCREEN</Text>

        <TouchableHighlight
          style={styles.menuView}
          onPress={() => this._navigateSideMenu()}>
          <Text style={styles.textViewLogout}>1. SIDE MENU</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.menuView}
          onPress={() => this._navigatetabBar()}>
          <Text style={styles.textViewLogout}>2. TAB VIEW</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.footerView}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.textViewLogout}>BACK</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.footerView}
          onPress={() => this._logout()}>
          <Text style={styles.textViewLogout}>LOGOUT</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }

  _logout() {
    this.props.navigation.popToTop();
  }
  _navigateSideMenu() {
    this.props.navigation.navigate('sideMenu');
  }
  _navigatetabBar() {
    this.props.navigation.navigate('tabBar');
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
  menuView: {
    marginTop: 10,
  },
  textViewLogout: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
});
