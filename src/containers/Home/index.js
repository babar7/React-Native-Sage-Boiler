import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { generalSaveAction } from '../../actions/GeneralActions';
import { USER } from '../../actions/ActionTypes';

class Home extends Component {
  componentDidMount() {
    this.props.generalSaveAction(USER.SUCCESS, { userLoggedIn: true });
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

const actions = { generalSaveAction };

export default connect(
  null,
  actions,
)(Home);
