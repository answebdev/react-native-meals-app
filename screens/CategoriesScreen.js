import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

// Optional:
// We can also do this down in the JSX in the FlatList,
// but we're doing this here to keep it lean.
function renderCategoryITem(itemData) {
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    );
}

// function CategoriesScreen() {
const CategoriesScreen = () => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryITem}
            numColumns={2}
        />
    );
};

export default CategoriesScreen;