import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  containerStyle?: any;
  onPress?: (data: any) => void;
  data: any;
};

export default React.memo<Props>((props: Props) => {
  const { data } = props;
  const { articleImageUrl, title } = data;
  return (
    <View style={[styles.card, props.containerStyle]}>
      <Image source={{ uri: articleImageUrl }} style={styles.cardImage} />
      <Text style={styles.cardText}>{title}</Text>
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
    backgroundColor: "#faf9f7",
    borderRadius: 10,
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
    fontSize: 16,
    fontWeight: "bold",
  },
});
