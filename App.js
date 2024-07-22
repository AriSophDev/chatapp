import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import MenuBar from "./Components/Menubar";
import Chats from "./Views/ChatView";

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Chats />
      </View>
      <View style={styles.menuBar}>
        <MenuBar />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
