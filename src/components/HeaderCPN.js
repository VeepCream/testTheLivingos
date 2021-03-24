import React from 'react'
import { Text, Dimensions, TouchableOpacity, View } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {
    return (
        <View
            style={{
                width: widthScreen,
                height: 50 + getStatusBarHeight(),
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff"
            }}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.goBack()
                }}>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <FontAwesomeIcons name={"angle-left"} size={30} color="#000" />
                </View>
            </TouchableOpacity>

        </View>
    )
}