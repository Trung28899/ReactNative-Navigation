import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
  const catID = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.push("MealDetail");
        }}
      ></Button>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

/* 
  Configuring the Header of a screen. 
  navigationData is automatically passed to the Component, like props 
  Try to compare this to CategoryScreen
*/
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
});

export default CategoryMealsScreen;
