import React from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import CarouselSliderScreen from '../screens/CarouselSliderScreen';
import HomeScreen from '../screens/HomeScreen';
import ListViewScreen from '../screens/ListViewScreen';

import HeaderCPN from '../components/HeaderCPN';

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="CarouselSliderScreen"
                component={CarouselSliderScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="ListViewScreen"
                component={ListViewScreen}
                options={
                    ({ navigation, route }) => ({
                        headerShown: true,
                        header: () => (
                            <HeaderCPN navigation={navigation} />
                        )
                    })
                } />


        </Stack.Navigator>
    );
}
