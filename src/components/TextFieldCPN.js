import React from 'react'
import { Text, View } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import { TextField } from 'react-native-material-textfield';

import { colors } from '../libs'

export default (props) => {
    return (
        <View
            style={{
                margin: 8,
                marginTop: Platform.select({ ios: 0, android: 0 }),
                paddingLeft: 20,
                paddingRight: 20
            }}>
            <TextField
                value={props.value}
                autoCorrect={false}
                secureTextEntry={props.secureTextEntry || false}
                enablesReturnKeyAutomatically={true}
                onFocus={() => { }}
                onChangeText={(v) => { props.onChangeText(v) }}
                returnKeyType='next'
                label={props.label}
                tintColor={colors.primary}
                baseColor={colors.dark} />
        </View>
    )
}