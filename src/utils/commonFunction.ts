
import Snackbar from 'react-native-snackbar';
/**
 *
 * @param message
 */
export const showToast = (message: string) => {
    Snackbar.show({
      text: message,
      backgroundColor: 'blue',
      duration: 5000,
      textColor: 'red',
    });
  };