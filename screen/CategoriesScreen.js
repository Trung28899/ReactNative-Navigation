import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The CategoryScreen</Text>
      <Button
        title="Go To Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryScreen;
