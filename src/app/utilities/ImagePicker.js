import React, { useEffect } from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import pokeballImg from '../assets/imgs/pokeball-gray.png'

export default function AvatarPicker(props) {

  const {imgUrl, setImgUrl} = props

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions.');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImgUrl(result.uri);
    }
  };

  return (
    <View style={styles.imgUploadContainer}>
      <TouchableOpacity 
        style={styles.imgUploadCircle} 
        activeOpacity={0.8}  
        onPress={pickImage}
      >
        {
          imgUrl === null ?
          <Image 
            source={pokeballImg}
            style={{width: 80,height:80,opacity:0.3}}
          /> :
          <Image 
            source={{uri:imgUrl}}
            style={styles.avatarImg}
          />
        }
        <AntDesign name="pluscircle" size={24} color={imgUrl === null ? '#777' : "#fff"} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({ 
  imgUploadContainer: {
    justifyContent: 'center',
    marginBottom: 20
  },
  imgUploadCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#fff',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  addIcon: {
    position: 'absolute',
    bottom: 13,
    right: 10,
    elevation: 5
  },
  avatarImg: {
    width: 150,
    height: 150,
    borderRadius: 90
  }
})