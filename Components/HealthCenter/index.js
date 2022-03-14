import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StatusBar,
    ActivityIndicator,
    Image,
    Alert,
} from "react-native";
import Map from "../../Utilies/Map";
function index(props) {
    return (
        <View>
            <Text style={{ textAlign: "center", fontWeight: "700" }}>
         Health Centers Around You
        </Text>
        <Map/>
        </View>
    );
}

export default index;