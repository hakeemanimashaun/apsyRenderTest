import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Item = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text  style={styles.data}>{item.email}</Text>
      </View>
      <View style={styles.column2}>
        <Text style={styles.data}>{item.date}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'yellow'
  },
  column: {
    width: '70%',
    borderWidth: 1,
    backgroundColor: 'yellow',
    paddingVertical: 5,

  },
  column2: {
    width: '30%',
    borderWidth: 1,
    backgroundColor: 'yellow',
    paddingVertical: 5,
  },
  data: {
    fontSize: 14,
   color: 'black',
   fontWeight: 'bold'
  }
});
