import { FlatList, StatusBar, StyleSheet, Text, View, ScrollView } from "react-native";

import { default as data } from "../../api/data.json";
import StarshipItem from "../components/StarshipItem"

async function fetchStarshipData() {
  try {
    const response = await fetch('https://swapi.py4e.com/api/starships/%60/');
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error("Something bad happened with the api...")
  }
}
export const StarshipFeedScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.headerContainer}>
        
        <FlatList 
        data={data.results} 
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <StarshipItem starship={item} />} 
        />
        
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
