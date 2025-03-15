import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ExpenseTotal from "../components/expense-total";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: 20,
        }}
      >
        <View style={styles.profileContainer}>
          <View style={styles.profile}></View>
          <View style={{}}>
            <Text style={{ fontSize: 13 }}>Good Morning,</Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Nicholas</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 25,
            width: 50,
            display: "flex",
            borderRadius: 8,
            backgroundColor: "#6674D3",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* Expense total component here */}

      <ExpenseTotal />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    margin: 20,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profile: {
    height: 50,
    width: 50,
    backgroundColor: "grey",
    borderRadius: 50,
  },
});
