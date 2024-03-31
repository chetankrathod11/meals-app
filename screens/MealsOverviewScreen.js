import { FlatList, StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter(
    (meals) => meals.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
