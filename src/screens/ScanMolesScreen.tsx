import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Alert } from "react-native";
import { countPixelRatio } from "../utility/SmartScale";
import Images from "../themes/Images";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as tf from "@tensorflow/tfjs";

const App = () => {
  const [imageUri, setImageUri] = useState(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel(
          "../assets/ai-models/mole_recognison.weights.h5"
        );
        setModel(loadedModel);
        console.log("Model loaded successfully");
      } catch (error) {
        console.error("Error loading the model:", error);
      }
    };

    loadModel();
  }, []);

  const makePrediction = async (image) => {
    if (model) {
      // Example: make a prediction using dummy data
      const inputTensor = tf.tensor3d([image]); // Adjust the shape and values as per your model input
      const output = model.predict(inputTensor);
      setPrediction(output.dataSync());
    }
  };

  const handleImagePickerResponse = async (
    result: ImagePicker.ImagePickerResult
  ) => {
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      let img = readImgToArr(result.assets[0].uri, result.assets[0].fileSize);
      makePrediction(img);
    }
  };

  const readImgToArr = async (uri, fileSize) => {
    try {
      const partsAmount = 10;
      let bases: Uint8Array[] = [];
      for (let i = 0; i < partsAmount; i = i + fileSize / partsAmount) {
        const base64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
          position: i,
          length: i + fileSize / partsAmount,
        });
        const byteArray = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
        bases.push(byteArray);
      }
      return bases;
    } catch (error) {
      console.error("Error reading file", error);
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
      alert("Have no access to images.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: true,
    });

    handleImagePickerResponse(result);
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Have to access to camera");
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
