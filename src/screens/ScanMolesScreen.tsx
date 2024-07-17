import React, { useState } from "react";
import { View, Image, StyleSheet, Alert } from "react-native";
import {
  CameraType,
  MediaType,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";
import { countPixelRatio } from "../utility/SmartScale";
import Images from "../themes/Images";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

const App = () => {
  const [imageUri, setImageUri] = useState(null);

  const handleImagePickerResponse = (result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled) {
      console.log(result.assets[0]);
    }
  };

  const showImagePickerOptions = () => {
    Alert.alert("Select image", "How would you like to upload image ?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Make a photo",
        onPress: () => openCamera(),
      },
      {
        text: "Select from galary",
        onPress: () => openImagePicker(),
      },
    ]);
  };
  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Vous avez refusé l'accès à la galerie d'images.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    handleImagePickerResponse(result);
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Vous avez refusé l'accès à la caméra.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    handleImagePickerResponse(result);
  };

  return (
    <View style={styles.container}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={showImagePickerOptions}>
          <Image source={Images.iconCamera} style={styles.btn} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: countPixelRatio(60.0),
    height: countPixelRatio(60.0),
    marginBottom: 60,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: "50%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
  },
});

export default App;
