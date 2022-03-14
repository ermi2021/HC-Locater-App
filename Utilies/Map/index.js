import React,{ useRef, useState, useEffect, useContext }  from "react";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  Image,
  Alert,
} from "react-native";

//expo imports
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");
function index(props) {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 1.23,
    longitude: 1.34,
    latitudeDelta: 0.07,
    longitudeDelta: 0.07,
  });
  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: false,
    });
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.056,
      longitudeDelta: 0.056,
    });
    setLoading(false);
  }

  return (
    <View
      style={{
        height: height * 0.7,
        backgroundColor: "red",
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
        elevation: 3,
        backgroundColor: "#f6f6f6",
      }}
    >
      <MapView
        ref={map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={region}
        showCompass={true}
        rotateEnabled={true}
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          width: width * 0.95,
          height: height * 0.7,
          marginVertical: 15,
          elevation: 5,
        }}
      >
        <Marker
          // title={ff.FirstName + " " + ff.MiddleName}
          coordinate={{
            latitude: 1.23,
            longitude: 1.34,
          }}
        >
          <Image
            source={require("../../assets/icon.png")}
            style={{ height: 50, width: 50 }}
          />
        </Marker>
       
      </MapView>
    </View>
  );
}

export default index;
