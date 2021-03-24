import React from 'react'
import { useEffect, Suspense, useState, useRef } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    ScrollView,
    Dimensions,
    SafeAreaView,
    Image,
    Linking
} from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import CheckBox from '@react-native-community/checkbox';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import ButtonIconCPN from '../components/ButtonIconCPN'
import ButtonCPN from '../components/ButtonCPN'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {

    const [entries] = useState([
        {
            url: require('../images/AI_Benefits_platform_02122563.png'),
            type: "web"
        },
        {
            url: require('../images/Content-Sign-up.jpeg'),
            type: "map"
        },
        {
            url: require('../images/living-os-x-era-event-presentation-for-condo-13-638.jpeg'),
            type: "img"
        },
    ])

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const _carousel = useRef(null);

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (item.type === "web") {
                        const url = "https://www.thelivingos.com/";
                        Linking.canOpenURL(url).then(supported => {
                            if (supported) {
                                Linking.openURL(url);
                            } else {
                                console.log("Don't know how to open URI: " + url);
                            }
                        });
                    }
                    if (item.type === "map") {
                        var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
                        var url = scheme + `13.8133057,100.6974276`;
                        Linking.openURL(url);
                    }
                    if (item.type === "img") {
                        setModalIsOpen(true)
                    }
                }}>
                <View
                    style={{
                        borderWidth: 1,
                        borderRadius: 20,
                        overflow: "hidden"
                    }}>
                    <Image
                        source={item.url}
                        style={{
                            width: widthScreen - 80,
                            height: widthScreen - 80,
                        }} />
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 50
                }}>
                <Carousel
                    ref={_carousel}
                    data={entries}
                    renderItem={_renderItem}
                    sliderWidth={widthScreen}
                    itemWidth={widthScreen - 80} />
                <ButtonCPN
                    text={"go to ListViewScreen"}
                    onPress={() => {
                        props.navigation.navigate({ name: 'ListViewScreen' })
                    }} />
                <ButtonCPN
                    text={"Logout"}
                    onPress={() => {
                        props.navigation.goBack();
                    }} />
                <Modal isVisible={modalIsOpen}>
                    <ImageViewer imageUrls={[{
                        url: '',
                        props: {
                            source: require('../images/living-os-x-era-event-presentation-for-condo-13-638.jpeg')
                        }
                    }]} />
                    <View
                        style={{
                            position: "absolute",
                            right: 20,
                            top: 20
                        }}>
                        <ButtonIconCPN
                            onPress={() => {
                                setModalIsOpen(false)
                            }}>
                            <FontAwesomeIcons name="close" size={30} color="#fff" />
                        </ButtonIconCPN>
                    </View>
                </Modal>
            </SafeAreaView>
        </Suspense>
    )
}