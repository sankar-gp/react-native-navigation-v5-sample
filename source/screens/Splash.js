import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {timer: 2};
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({timer: prevState.timer - 1})),
      3000,
    );
  }

  componentDidUpdate() {
    if (this.state.timer === 1) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.loadingContainer}>
          <Text style={styles.textView}>LOADING</Text>
          {this._timerView()}
          <Text style={styles.textViewNote} onPress={() => this._navigate()}>
            CLICK HERE TO NAVIGATE
          </Text>
        </View>
      </View>
    );
  }

  _timerView() {
    return (
      <View style={styles.timerView}>
        {this._navigation(this.state.timer)}
        <Text style={styles.timerViewText}>{this.state.timer} </Text>
      </View>
    );
  }

  _navigation(timer) {
    if (timer === 1) {
      this._timerHandler = setTimeout(() => {
        this.props.navigation.navigate('Signin');
      }, 0);
    }
  }

  _navigate() {
    Alert.alert('hrllo');
    this.props.navigation.navigate('Signin');
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  loadingContainer: {
    alignSelf: 'center',
    flexDirection: 'column',
  },
  textView: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  textViewNote: {
    padding: 5,
    fontSize: 10,
    color: 'white',
  },
  timerViewText: {
    fontSize: 20,
    color: 'white',
  },
  timerView: {
    alignItems: 'center',
  },
});
