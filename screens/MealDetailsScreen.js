import { Text } from "react-native";

function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId;

    return (
        <Text>This is the Meal Details Screen for {mealId}</Text>
    );
}

export default MealDetailsScreen;