import React, { useRef, useState, useEffect, useContext } from "react";
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
import Communcications from "react-native-communications";
import { CurrentLocationButton } from "../Buttons/CurrentLocationButton";
//expo imports
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");
function Map(props) {
  const [location, setLocation] = useState(null);
  const map = useRef(null);
  const [region, setRegion] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
        });
      } catch (error) {
        let status = Location.getProviderStatusAsync;
      }
    })();
  }, [region]);

  const centerMap = () => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = region;
    map.current.animateToRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    });
  };

  const call = (pn) => {
    Communcications.phonecall(pn, false);
  };
  return (
    <View
      style={{
        height: height * 0.8,
        backgroundColor: "red",
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
        elevation: 3,
        backgroundColor: "#f6f6f6",
      }}
    >
      <CurrentLocationButton
        cb={() => {
          centerMap();
        }}
        bottom="100"
      />
      <MapView
        ref={map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={location}
        showCompass={true}
        rotateEnabled={true}
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          width: width * 0.95,
          height: height * 0.8,
          elevation: 5,
        }}
      >
        {props.data.map((location, index) => (
          <View>
            <Marker
              pinColor="red"
              // title={ff.FirstName + " " + ff.MiddleName}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            >
              {props.type == "ph" ? (
                <Image
                  source={require("../../assets/pharma.png")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Image
                  source={require("../../assets/hospitallll.jpg")}
                  style={{ height: 30, width: 30 }}
                />
              )}

              <Callout
                tooltip
                onPress={() => {
                  call(location.Phone_number)
                }}
              >
                <View
                  style={{
                    width: 200,
                    borderRadius: 20,
                    elevation: 30,
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    marginBottom: 10,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "600",
                      marginVertical: 10,
                    }}
                  >
                    {location.Name}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "600",
                      marginVertical: 10,
                    }}
                   
                  >
                    {location.Phone_number}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "700",
                      marginVertical: 10,
                      marginVertical: 10,
                    }}
                  >
                    {location.email}
                  </Text>
                  {props.type == "ph" ? (
                    <></>
                  ) : (
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: "700",
                        marginVertical: 10,
                        marginVertical: 10,
                      }}
                    >
                      Service Type {location.Ser_type}
                    </Text>
                  )}
                </View>
              </Callout>
            </Marker>
          </View>
        ))}
      </MapView>
    </View>
  );
}

export default Map;
