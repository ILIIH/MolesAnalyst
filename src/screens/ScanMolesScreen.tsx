import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { countPixelRatio } from "../utility/SmartScale";
import Images from "../themes/Images";
import { TouchableOpacity } from "react-native-gesture-handler";
import RNFS from "react-native-fs";
import jpeg from "jpeg-js";
import ImageResizer from "react-native-image-resizer";

const App = () => {
  const [imageUri, setImageUri] = useState(null);

  const openCamera = () => {
    const options = {
      mediaType: "photo",
      cameraType: "back",
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        var img_arr = convertImgToArr(response.assets[0].uri);
        console.log(img_arr);
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const convertImgToArr = async (imageUri: string) => {
    const resizedImage = await ImageResizer.createResizedImage(
      imageUri,
      100,
      100,
      "PNG",
      100
    );
    const base64Image = await RNFS.readFile(resizedImage.uri, "base64");
    const imageBuffer = Buffer.from(base64Image, "base64");
    const decodedImage = jpeg.decode(imageBuffer, { useTArray: true });
    const pixelArray = convertTo2DArray(decodedImage);
    console.log("pixelArray > " + pixelArray);

    return pixelArray;
  };

  const convertTo2DArray = (image) => {
    const { width, height, data } = image;
    const array2D = [];
    console.log("array2D > " + array2D);

    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        const index = (y * width + x) * 4;
        const r = data[index];
        const g = data[index + 1];
        const b = data[index + 2];
        const a = data[index + 3];
        row.push([r, g, b, a]);
      }
      array2D.push(row);
    }

    return array2D;
  };

  const openGallery = () => {
    const options = {
      mediaType: "photo",
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={openCamera}>
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
