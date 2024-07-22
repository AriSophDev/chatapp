import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const ChatList = () => {
  return (
    <SafeAreaView>
      <View style={styles.chatList}>
        <Text style={styles.chatListText}>CHATS</Text>
      </View>
    </SafeAreaView>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  chatListText: {
    paddingTop: 60,
    paddingLeft: 20,
    justifyContent: "flex-start",
    fontSize: 25,
    fontWeight: "bold",
  },
});
