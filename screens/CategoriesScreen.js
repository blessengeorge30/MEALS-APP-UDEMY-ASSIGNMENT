import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import React from 'react';
import CategorygridTile from '../components/CategorygridTile';
import { useNavigation } from '@react-navigation/native';



const CategoriesScreen = ({navigation}) => {
    function renderCategoryItem(itemData) {
        function PressHandler() {
    navigation.navigate('MealsOverview',{categoryId: itemData.item.id});
        }
        return (
            <CategorygridTile title={itemData.item.title}
             color={itemData.item.color} onPress={PressHandler} 
             navigation={navigation}/>
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem.bind()}
            numColumns={2}       // Set number of columns to 2
            key={'2-columns'}    // Change key to match the number of columns
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
