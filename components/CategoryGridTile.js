import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

// function CategoryGridTile() {
const CategoryGridTile = ({ title, color }) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        // Shadow for Android:
        elevation: 4,
        // Shadow for iOS:
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        // For Android ripple effect -
        // this does it so that the ripple effect
        // does not go beyond the rounded corners.
        // Also, we want 'overflow: hidden' for the ripple effect only on Android -
        // doesn't work on iOS, and it actually removes the shadow on iOS
        // because of 'overflow'
        // To address this, use the Platform API to conditionally set 'overflow: hidden'
        // only on Android:
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});