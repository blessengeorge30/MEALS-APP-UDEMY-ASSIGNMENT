import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator}  from '@react-navigation/stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailedScreen from './screens/MealsDetailedScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
<>
<StatusBar style='light'/>
<NavigationContainer>
  <Stack.Navigator screenOptions={{
     headerStyle: {backgroundColor: 'black'},
     headerTintColor: 'white',
     contentstyle: {backgroundColor: '#ccc'}
  }}>
    <Stack.Screen name="MealsCategories" component={CategoriesScreen} 
    options={{
      title: ' Home',
     
      }}/>
    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
    
    // options={({ route,navigation }) =>{
    //   const catId = route.params.categoryId;
    //   return{
    //    title: catId,
    //   };
    // } }
    />
     <Stack.Screen name="MealsDetailedScreen" component={MealsDetailedScreen}/>
  </Stack.Navigator>
</NavigationContainer>

</>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
