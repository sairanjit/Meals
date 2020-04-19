import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";


const CategoryGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback
        style={{ flex: 1 }}
        onPress={props.onSelect}>
        <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow: 'hidden'
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'right'
  }
});

export default CategoryGridTile;