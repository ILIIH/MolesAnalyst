import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Fonts } from "../../themes";

type Props = {
  onPress?: (data: any) => void;
  data: any;
};

export default React.memo<Props>((props: Props) => {
  const { data } = props;
  const { articleImageUrl, title } = data;
  return (
    <View style={[styles.card]}>
      <Image source={{ uri: articleImageUrl }} style={styles.cardImage} />
      <Text style={[Fonts.style.baseH6, styles.cardText]}>{title}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "40%",
  },
  cardImage: {
    width: "100%",
    height: 100,
  },
  cardText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "InriaSans-Light",
  },
});
