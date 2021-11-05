import { Platform } from "react-native";
import storage from '@react-native-firebase/storage';

export const uploadImage = async (image, setImage) => {
  const { uri } = image;
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
  const task = storage()
    .ref(filename)
    .putFile(uploadUri);
  task.on('state_changed', snapshot => {
  
  });
  try {
    await task;
  } catch (e) {
    console.error(e);
  }
  Alert.alert(
    'Photo uploaded!'
  );
  setImage(null);
};