import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import { Home, Login } from "../containers";

export const LoginStack = createStackNavigator({
  login: { screen: Login }
});

export const HomeStack = createDrawerNavigator({
  home: { screen: Home }
});

const rootNavigator = isUserLoggedIn =>
  createAppContainer(
    createSwitchNavigator(
      { loginStack: LoginStack, homeStack: HomeStack },
      {
        initialRouteName: isUserLoggedIn ? "homeStack" : "loginStack"
      }
    )
  );

export default rootNavigator;
