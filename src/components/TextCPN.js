import React from 'react'
import { Text } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'


export default (props) => {
    return (
        <Text
            style={props.style || {}}>
            {props.text}
        </Text>
    )
}