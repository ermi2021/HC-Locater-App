import React from 'react';
import { View, Text , Image, Button, Dimensions} from 'react-native-web';
const { height, width } = Dimensions.get("window");
function index(props) {
    return (
       
            <View>
              <View
                style={{
                  height: height,
                  borderBottomWidth: 1,
                  borderColor: "#65216E",
                  backgroundColor: "#f6f6f6",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  paddingHorizontal: 20,
                }}
              >
                <Image
                  style={{
                    height: 90,
                    width: 90,
                    // backgroundColor: "yellow",
                    borderRadius: 100,
                    marginTop: 20,
                    marginHorizontal: 10,
                  }}
                />
                <Button
                  title="Update Profile"
                  type="outline"
                  onPress={() => {
                    navigation.navigate("workerupdate");
                  }}
                />
                <Button
                  title="Log Out"
                  type="outline"
                  onPress={() => {
                    logoutAlertWorker();
                  }}
                  containerStyle={{
                    marginVertical: 15,
                  }}
                />
              </View>
              <View>
                <View></View>
              </View>
            </View>
    );
}

export default index;