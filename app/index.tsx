import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.wallpaper}
      />
      <View style={styles.intro}>
        <View style={styles.introTitleBox}>
          <Text style={styles.introTitle}>Manage your daily </Text>
          <Text style={styles.introTitle}>life expenses</Text>

          <Text style={styles.introBody}>
            Expense tracker is a simple and efficient personal finance
            management app that allows you to track your daily expenses and
            income
          </Text>
        </View>
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            borderRadius: 8,
            backgroundColor: "#EF6756",
          }}
          onPress={() => router.push("/login")}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
            Explore
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F8ECC2",
    paddingTop: 50,
  },
  wallpaper: {
    resizeMode: "cover",
    height: 300,
    width: 300,
    borderRadius: 300,
    marginTop: 40,
  },
  intro: {
    height: 300,
    backgroundColor: "white",
    width: "96%",
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 40,
    alignContent: "center",
  },
  introTitleBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  introTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  introBody: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
  },
});
