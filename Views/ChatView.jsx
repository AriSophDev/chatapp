import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { SearchBar } from "../Components/SearchBar";

const ChatList = () => {
  return (
    <SafeAreaView>
      <View style={styles.chatList}>
        <Text style={styles.chatListText}>Chats</Text>
      </View>
    </SafeAreaView>
  );
}

    
  

export default ChatList
    
const styles = StyleSheet.create({
  chatList: {
    paddingTop: 60,
    paddingLeft: 20,
    justifyContent: "flex-start",
  },
  chatListText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});



