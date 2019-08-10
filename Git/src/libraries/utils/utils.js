import { showMessage } from "react-native-flash-message";


export function showFlashMessage(message, type) {
  showMessage({
      message: message,
      type: type ? type : 'info',
  });
}
