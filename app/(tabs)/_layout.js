import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Screen name="don" options={{ title: "Donation" }} />
      <Tabs.Screen name="legal" options={{ title: "Mention Légale" }} />
    </Tabs>
  );
}
