// @flow
import Immutable from "seamless-immutable";
import * as types from "../actions/ActionTypes";

const initialState = Immutable({
  isNetworkConnected: false
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.NETWORK_INFO:
      return Immutable.merge(state, {
        isNetworkConnected: action.data
      });
    default:
      return state;
  }
};
