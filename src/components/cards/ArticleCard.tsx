import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

type Props = {
  onPress?: (data: any) => void;
  data: any;
};

const ArticleCard: React.FC<Props> = (props) => {
  const { onPress, data } = props;
  const { articleImageUrl, title } = data;

  return (
    <Pressable onPress={() => onPress?.(data)} style={styles.card}>
      <Image source={{ uri: articleImageUrl }} style={styles.cardImage} />
      <Text style={styles.cardText}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(ArticleCard);

const styles = StyleSheet.create({
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
