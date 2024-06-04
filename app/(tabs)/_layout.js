import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ ...color, ...headerOptions }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ size, color }) => (
        <Ionicons name="home-sharp" size={size} color={color} />
      ) }} />
      <Tabs.Screen name="actions" options={{ title: "Mes Bonnes Actions", tabBarIcon: ({ size, color }) => (
        <Ionicons name="thumbs-up-sharp" size={size} color={color} />
  )}} />
      <Tabs.Screen name="don" options={{ title: "Donation" , tabBarIcon: ({ size, color }) => (
        <Ionicons name="logo-bitcoin" size={size} color={color} />
  )}} />
      <Tabs.Screen name="legal" options={{ title: "Mention Légale", tabBarIcon: ({ size, color }) => (
        <Ionicons name="newspaper-sharp" size={size} color={color} />
   ) }} />
    </Tabs>
  );
}

const color = {
  tabBarActiveTintColor: '#FF9EAA',
  tabBarInactiveTintColor: '#BBBBBB',
}

const headerOptions = {
  headerTitleAlign: "center",
  headerStyle: {backgroundColor: "#FF9EAA"}
  
}
