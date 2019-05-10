import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('home')}
        />
      </View>
    );
  }
}

export default Login;
