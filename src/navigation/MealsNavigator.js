import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FilterScreen from '../screens/FilterScreen';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular'
  },
  headerTintColor: 'white',
  headerTitle: 'A screen'
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  });

const FavNavigator = createStackNavigator(
  {
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: {
        headerTitle: "Favourites screen"
      }
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primary,
      tabBarLabel:'MEALS!!!'
    }
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favourites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.accent
    }
  }
}

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FilterScreen,
      navigationOptions: {
        headerTitle: 'Filter Meals'
      }
    }
  },
  {
    // navigationOptions: {
    //   drawerLabel: 'Filters!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  tabScreenConfig,
  {
    activeColor: 'white',
    shifting: true,
    barStyle: {
      backgroundColor: Colors.primary
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: 'OpenSans-Bold'
      }
    }
  }
);

export default createAppContainer(MainNavigator);