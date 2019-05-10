import _ from "lodash";
import { Platform } from "react-native";

let userLoggedIn;
let navigatorRef;
class Util {
  setUserLoggedIn = val => (userLoggedIn = val);
  getIsUserLoggedIn = () => userLoggedIn;

  setNavigatorRef = ref => (navigatorRef = ref);
  getNavigatorRef = () => navigatorRef;

  keyExtractor = (item, index) => index;

  isPlatformAndroid = () => Platform.OS === "android";

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
export default new Util();
