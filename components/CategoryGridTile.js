import { Pressable, View, Text } from "react-native";

// function CategoryGridTile() {
const CategoryGridTile = ({ title, color }) => {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;