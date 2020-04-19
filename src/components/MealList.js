import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from "react-native";

import MealItem from '../components/MealItem';

const MealList = (props) => {

  const renderMealItem = itemdata => {
    return (
      <MealItem
        title={itemdata.item.title}
        duration={itemdata.item.duration}
        complexity={itemdata.item.complexity}
        affordability={itemdata.item.affordability}
        image={itemdata.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemdata.item.id
            }
          })
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: '100%' }}
        data={props.listData}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  }
});

export default MealList;