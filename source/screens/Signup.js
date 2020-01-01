import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Signup extends Component {
  state = {
    username: '',
    password: '',
  };
  render() {
    return (
      <View style={styles.mainView}>
        {this._logoView()}
        <View style={styles.signinViewContainer}>
          <Text style={styles.signinTitleView}>SIGNUP</Text>
          {this._editTextView()}
          {this._buttonMainView()}
        </View>
        {this._signupView()}
      </View>
    );
  }

  _logoView() {
    return (
      <View>
        <Image
          style={styles.imageView}
          source={require('../images/logo.png')}
        />
      </View>
    );
  }
  _editTextView() {
    return (
      <View style={styles.editTextView}>
        <TextInput
          placeholder="NAME"
          onChangeText={password => this.setState({password})}
        />
        <TextInput
          placeholder="Mobile Number"
          multiline={false}
          keyboardType={'numeric'}
          onChangeText={username => this.setState({username})}
        />
        <TextInput
          placeholder="Password"
          onChangeText={password => this.setState({password})}
        />
        <TextInput
          placeholder="Retype Password"
          onChangeText={password => this.setState({password})}
        />
      </View>
    );
  }

  _buttonMainView() {
    return (
      <TouchableOpacity
        style={styles.signinBtnMainView}
        onPress={() => this.props.navigation.navigate('Home')}>
        <Text style={styles.signinBtnTextView}>SIGNUP</Text>
      </TouchableOpacity>
    );
  }
  _signupView() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Signin')}>
        <Text style={styles.signupView}>
          Already Having Account? Signin here
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'red',
  },
  signinViewContainer: {
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  imageView: {
    marginTop: 5,
    alignSelf: 'center',
    resizeMode: 'center',
  },
  signinTitleView: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  editTextView: {
    marginTop: 10,
  },
  signinBtnMainView: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  signinBtnTextView: {
    textAlign: 'center',
    color: 'black',
  },
  signupView: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
  },
});
