import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import "./app.css";

//component imports
import Pharmacies from "./Components/Pharmacies";
import HealthCenter from "./Components/HealthCenter";

//navigation imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

//expo imports
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
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

function drawerRoutes() {
  return (
    <Drawer.Navigator
      drawerType="front"
      initialRouteName="Home"
      drawerContent={(props) => <UserDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={TypeRoutes}
        options={{
          headerTitle: "Health Center Locater System",
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={drawerRoutes}
          options={{
            headerTitle: "Home",
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
