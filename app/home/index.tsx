import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const Home = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Home Screen</Text>

      <Button
        title="Go to Wallet"
        onPress={() => router.push("/home/wallet")}
      />
      <Button
        title="Go to Profile"
        onPress={() => router.push("/home/profile")}
      />
    </View>
  );
};

export default Home;
