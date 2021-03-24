import 'react-native-gesture-handler';
import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import RecoilOutside from "recoil-outside"
import SplashScreen from 'react-native-splash-screen';
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FeatherIcons from 'react-native-vector-icons/Feather';
import SimpleLineIconsIcons from 'react-native-vector-icons/SimpleLineIcons';

import MainStack from './stacks/MainStack';

export default function App() {

    useEffect(() => {
        SplashScreen.hide();
        MaterialIconsIcons.loadFont();
        FontAwesomeIcons.loadFont();
        FeatherIcons.loadFont();
        SimpleLineIconsIcons.loadFont();
    }, []);

    return (
        <RecoilRoot>
            <NavigationContainer>
                <RecoilOutside />
                <MainStack />
            </NavigationContainer>
        </RecoilRoot>
    );
}