import React from "react";
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

function HealthCenter(props) {
    const HealthCenters = [
        {
            "Name":'Tikur anbessa',
            "Phone_number":"091247892",
            "email":"tikur_anbessa",
            "Region":"Amhara",
            "latitude":9.035039612216815,
            "longitude":38.753685423677446,
            "Ser_type":"Antinatal Care"
        },
        {
            "Name":'St. Paul Hospital',
            "Phone_number":"091247892",
            "email":"st_paul",
            "Region":"Oromia",
            "latitude":9.04773040615139, 
            "longitude":38.7276159728357,
            "Ser_type":"Psycatri"
        },
        {
            "Name":'St. Paul Hospital',
            "Phone_number":"091247892",
            "Region":"Tigray",
            "email":"st_paul",
            "latitude":9.04773040615139, 
            "longitude":38.7276159728357,
            "Ser_type":"childrens"
        },
        {
            "Name":'Yekatit 12 Hospital',
            "Phone_number":"091247892",
            "email":"Yekatit",
            "Region":"Afar",
            "latitude":9.04375569827368, 
            "longitude":38.76005732552519,
            "Ser_type":"Antinatal Care"
        }
    ];  
  return (
    <View>
      <Text>Health Centers Around You</Text>
      <Map type="hc" data={HealthCenters}/>
    </View>
  );
}

export default HealthCenter;
