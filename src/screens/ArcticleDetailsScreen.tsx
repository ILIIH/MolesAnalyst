import React, { useState } from "react";
import { View, Image, ScrollView, Text, StyleSheet } from "react-native";

const data = {
  id: "4",
  articleImageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6z4GQDP_JCLdMkZRAoEOAUyID8sPe_xPj0w&s",
  title: "Morning rituals for skin",
  date: "20/07/2000",
  text: "Morning Rituals for Glowing Skin. Mornings set the tone for the rest of your day, and a well-structured skincare ritual can make all the difference in achieving healthy, glowing skin. Here’s how to start your day with a rejuvenating skincare routine that leaves your skin fresh, hydrated, and ready to take on the day. 1. Gentle Cleanse Start with a gentle cleanser that suits your skin type. Overnight, your skin accumulates oil, dirt, and sweat, which need to be washed away. Opt for a hydrating cleanser if you have dry skin, or a foaming one if your skin is oily. The goal is to clean your skin without stripping it of essential moisture.",
};

const ArticleDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image source={{ uri: item.articleImageUrl }} style={styles.image} />
        <View style={styles.comntentContailer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{data.text}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    alignItems: "flex-start",
  },
  comntentContailer: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "left",
  },
  text: {
    fontSize: 16,
    marginTop: 16,
    textAlign: "justify",
  },
});

export default ArticleDetailsScreen;
