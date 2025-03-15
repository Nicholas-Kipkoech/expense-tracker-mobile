import { SafeAreaView, Text, View, StyleSheet, Dimensions } from "react-native";

const ExpenseTotal = () => {
  const totalUsed = 12000;
  const totalRemainder = 20000;

  const progressWidth = (totalUsed / totalRemainder) * 100; // Convert to percentage

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Expense Total</Text>
        <Text style={styles.amount}>
          KSH {Number(totalUsed).toLocaleString()} / KSH{" "}
          {Number(totalRemainder).toLocaleString()}
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${progressWidth}%` }, // Dynamically adjust width
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure SafeAreaView takes full height
  },
  overlay: {
    backgroundColor: "#6674D3",
    padding: 20,
    borderRadius: 10,
    width: "90%", // Use percentage for responsiveness
    height: 120,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  amount: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  progressBar: {
    height: 10,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#5868BB",
    marginTop: 10,
    overflow: "hidden", // Prevent overflow
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#E6C68B",
    borderRadius: 10,
  },
});

export default ExpenseTotal;
