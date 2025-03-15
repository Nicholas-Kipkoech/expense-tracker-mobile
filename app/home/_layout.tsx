import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { FAB } from "react-native-paper";
import { Platform, StyleSheet } from "react-native";

export default function HomeLayout() {
  const router = useRouter();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#EE6856",
          tabBarInactiveTintColor: "#888",
          headerShown: false, // Hide header for all tabs
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: "Wallet",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="wallet-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen name="_Layout" options={{ href: null }} />
        <Tabs.Screen name="add-expense" options={{ href: null }} />
      </Tabs>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => router.push("/home/add-expense")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 20,
    bottom: Platform.OS === "ios" ? 120 : 80, // Adjust based on tab bar height
    backgroundColor: "#EE6856",
  },
});
