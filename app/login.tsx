import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}></View>
      <View style={styles.loginBox}>
        <TextInput style={styles.textInputs} placeholder="Email" />
        <TextInput
          style={styles.textInputs}
          placeholder="Password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.signInBtn}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F8ECC2", // Ensure smooth transition
  },
  topContainer: {
    backgroundColor: "#F8ECC2",
    height: "40%",
  },
  loginBox: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    gap: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    alignSelf: "center",
    elevation: 5, // Adds shadow for depth (Android)
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 0, // Remove border since background color is set
  },
  textInputs: {
    borderWidth: 0.5,
    borderColor: "#ccc",
    height: 55,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
  },
  signInBtn: {
    height: 55,
    backgroundColor: "#EE6856",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
});
