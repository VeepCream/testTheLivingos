import React from 'react'
import { useEffect, Suspense, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    ScrollView,
    Dimensions,
    SafeAreaView,
    Alert
} from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import CheckBox from '@react-native-community/checkbox';

import TextFieldCPN from '../components/TextFieldCPN'
import ButtonCPN from '../components/ButtonCPN'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: "center",
                }}>
                <TextFieldCPN label={"username"} value={username} onChangeText={(v) => setUsername(v)} />
                <TextFieldCPN label={"password"} value={password} onChangeText={(v) => setPassword(v)} secureTextEntry={true} />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: widthScreen,
                        marginTop: 10
                    }}>
                    <ButtonCPN
                        text={"login"}
                        onPress={() => {
                            //props.navigation.navigate({ name: 'SendOTPScreen' })
                            if (username === "") {
                                Alert.alert(
                                    "แจ้งเตือน",
                                    "กรุณา กรอก username",
                                    [
                                        { text: "OK", onPress: () => { } }
                                    ]
                                );
                            }
                            if (username !== "" && password === "") {
                                Alert.alert(
                                    "แจ้งเตือน",
                                    "กรุณา กรอก password",
                                    [
                                        { text: "OK", onPress: () => { } }
                                    ]
                                );
                            }

                            if (username !== "" && password !== "") {
                                props.navigation.navigate({ name: 'CarouselSliderScreen' })
                            }

                        }} />
                </View>


            </SafeAreaView>
        </Suspense>
    )
}