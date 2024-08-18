import React, { useState } from "react";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ArticleCard from "../components/cards/ArticleCard";
import DisclaimerModal from "../components/modals/DisclaimerModal";
import Images from "../themes/Images";
import { countPixelRatio } from "../utility/SmartScale";

const data = [
  {
    id: "1",
    articleImageUrl:
      "https://images.ctfassets.net/f60q1anpxzid/asset-a46bfd16ba92efe3028b2a9223951705/18e50c83a0eaf3735406d4af71b33829/Thumb54.jpg?fm=jpg&fl=progressive&q=50&w=1200",
    title: "Types of moles",
  },
  {
    id: "2",
    articleImageUrl:
      "https://www.verywellhealth.com/thmb/KdQexN647_pXAbpd7V_m-9qBFM0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-140890717-529fb6603c6d4d86ab99a2e8e927e3f1.jpg",
    title: "How to protect skin",
  },
  {
    id: "3",
    articleImageUrl:
      "https://img.freepik.com/free-photo/life-insurance-concept-with-paper-family_23-2149191410.jpg",
    title: "Health tips",
  },
  {
    id: "4",
    articleImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6z4GQDP_JCLdMkZRAoEOAUyID8sPe_xPj0w&s",
    title: "Morning rituals",
  },
];

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const handleModal = () => setIsModalVisible(!isModalVisible);

  const handleArticlePress = (item) => {
    navigation.navigate("ArcticleDetailsScreen", { item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ArticleCard data={item} onPress={handleArticlePress} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          navigation.navigate("ScanMolesScreen", {});
        }}
      >
        <Image source={Images.iconScan} style={styles.iconScan} />
      </TouchableOpacity>
      <DisclaimerModal visible={isModalVisible} onClosePressed={handleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconScan: {
    width: countPixelRatio(23.8),
    height: countPixelRatio(23.8),
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
    width: "100%",
  },
  scanImage: {
    width: 100,
    height: 100,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    bottom: 30,
    right: 30,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  fabImage: {
    width: 40,
    height: 21,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
