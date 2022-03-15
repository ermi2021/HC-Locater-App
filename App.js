
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
//component imports
import Pharmacies from "./Components/Pharmacies";
import HealthCenter from "./Components/HealthCenter";
import DrawerContent from "./Utilies/DrawerContent";

//navigation imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

//expo imports
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const { height, width } = Dimensions.get("window");

function TypeRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pharmacies"
        component={Pharmacies}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <MaterialIcons
              name="local-pharmacy"
              size={18}
              color={focused ? "red" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Health Center"
        component={HealthCenter}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome5
              name="hospital-alt"
              size={18}
              color={focused ? "red" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function Header(props) {
  const head_title = props.title;
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Entypo name="menu" size={30} />
      <Text style={{ marginHorizontal: 10, fontWeight: "700", fontSize: 16 }}>
        {head_title}
      </Text>
    </View>
  );
}
// function drawerRoutes() {
//   return (
//     <Drawer.Navigator
//       drawerType="front"
//       initialRouteName="Home"
//       drawerContent={(props) => <DrawerContent {...props} />}
//     >
//       <Drawer.Screen
//         name="Home"
//         component={TypeRoutes}
//         options={{
//           headerTitle: <Header title="Home" />,
//           headerShown: false,
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TypeRoutes}
          options={{
            headerTitle: <Header title="Profle" />,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
