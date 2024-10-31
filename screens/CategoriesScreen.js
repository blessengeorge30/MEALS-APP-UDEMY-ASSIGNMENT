import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import React from 'react';
import CategorygridTile from '../components/CategorygridTile';

function renderCategoryItem(itemData) {
    return (
        <CategorygridTile title={itemData.item.title} color={itemData.item.color} />
    );
}

const CategoriesScreen = () => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}       // Set number of columns to 2
            key={'2-columns'}    // Change key to match the number of columns
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
