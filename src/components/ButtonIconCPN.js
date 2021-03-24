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
                        padding:20
                    }}>
                    {props.children}
                </View>
            </TouchableOpacity>
        </View>
    )
}