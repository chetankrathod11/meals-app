import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    color: "#e2b497",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
