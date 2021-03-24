import React from 'react'
import { useEffect, Suspense, useState } from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    SafeAreaView,
    FlatList
} from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import CheckBox from '@react-native-community/checkbox';

import GetPhotos from '../actions/GetPhotos'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [listPhotos, setListPhotos] = useState([])

    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = async () => {
        const photos = await GetPhotos();
        setListPhotos(photos);
        //    console.log("photos",photos);
    }

    return (
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: "center",
                }}>
                <FlatList
                    data={listPhotos}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center",margin:10
                                }}>
                                <Image
                                    source={{ uri: item.thumbnailUrl }}
                                    style={{
                                        width: widthScreen - 120,
                                        height: widthScreen - 120,
                                    }} />
                                <Text
                                    style={{
                                        flexWrap: "wrap",
                                        width: widthScreen - 120,
                                    }}>
                                    {item.title}
                                </Text>
                            </View>
                        )
                    }} />

            </SafeAreaView>
        </Suspense>
    )
}