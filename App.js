import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 16,
        }}
      >
        Kajetan 5th birthday
      </Text>
      <Image
        source={{
          uri: "https://betteroffinside-production.s3.us-east-2.amazonaws.com/uploads/b2d4d1be5ed43ecaccb42b59664dcf94.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXAFQ566ASFWYOAOL%2F20230414%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230414T082548Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=a2680f96f1c2fc6af298947c7c20565d72b6c6291290d91c927f776d52827974",
        }}
        style={{ width: "90%", height: 400 }}
        resizeMode="contain"
      />
      <StatusBar style="auto" />
    </View>
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
