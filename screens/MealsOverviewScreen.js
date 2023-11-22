import { View, FlatList, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;

    // Return 'true' for all the meals that belong to this category, i.e.,
    // Return 'true' if we want to keep a meal; false if we don't:
    const displayedMeals = MEALS.filter((mealItem) => {
        // This will give us our displayed meals:
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} />;
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});