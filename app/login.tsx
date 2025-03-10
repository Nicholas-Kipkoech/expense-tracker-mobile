import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInputsBox}>
        <TextInput style={styles.textInputs} />
        <TextInput style={styles.textInputs} />
      </View>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  textInputsBox: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  textInputs: {
    borderWidth: 0.5,
    height: 50,
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
  },
});
