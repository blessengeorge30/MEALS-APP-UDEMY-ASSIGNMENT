import { Button, Pressable, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategorygridTile = ({title, color , onPress}) => {
const navigation = useNavigation();

    return (
        <View style={styles.gird}>
            <Pressable android_ripple= {{color: '#ccc'}}
             style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed :null,]}
             onPress={onPress}>
                <View style={[styles.innercontainer, {backgroundColor: color} ]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>

    )
}

export default CategorygridTile

const styles = StyleSheet.create({
    gird: {
        flex:1,
        margin: 16,
        height: 150,
        borderRadius: 10,
        elevation:10,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.35,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visiable'
    },
    
    button: {
        flex: 1,
        
    },
    buttonPressed:{
        opacity:0.5

    },
    innercontainer:{
        flex:1,
        padding:16,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontWeight:'bold',
        fontSize:18
    }

})