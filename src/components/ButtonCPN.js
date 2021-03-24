import React from 'react'
import { View, TouchableOpacity, Dimensions, Text } from 'react-native'

import { colors } from '../libs'
import TextCPN from './TextCPN'

const widthScreen = Dimensions.get('window').width

export default (props) => {

    const mainColor = props.colors || colors.primary

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.onPress()
                }}>
                <View
                    style={{
                        width: props.width || widthScreen - 40,
                        height: props.height || 50,
                        backgroundColor: !props.bEnable ? mainColor : "#ffffff",
                        borderWidth: 1,
                        borderColor: !props.bEnable ? 'transparent' : mainColor,
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <TextCPN
                        style={{
                            color: props.bEnable ? mainColor : "#ffffff"
                        }}
                        text={props.text} />
                </View>
            </TouchableOpacity>
        </View>
    )
}