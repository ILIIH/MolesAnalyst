import { View, Text, FlatList } from "react-native";
import ArticleCard from "../components/cards/ArticleCard";

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

const numColumns = 2;

const HomeScreen = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ArticleCard data={item} />}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
    />
  );
};

export default HomeScreen;
