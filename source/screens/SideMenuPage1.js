import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SideMenuPage1 extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text
          style={styles.containerView}
          onPress={() => {
            this._closeDrawer();
          }}>
          OPEN / CLOSE DRAWER
        </Text>
      </View>
    );
  }

  _closeDrawer() {
    this.props.navigation.toggleDrawer();
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  containerView: {
    marginBottom: 30,
    marginLeft: 30,
    margin: 5,
    padding: 5,
    fontSize: 25,
  },
});
