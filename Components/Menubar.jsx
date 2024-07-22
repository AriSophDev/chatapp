import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function MenuBar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom, paddingTop: insets.top },
      ]}
    >
      <TouchableOpacity style={styles.menuItem} onPress={() => alert("Chats")}>
        <Icon name="message" size={30} color="black" />
        <Text style={styles.text}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => alert("Contacts")}>
        <Icon name="contacts" size={30} color="black"  />
        <Text style={styles.text}>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => alert("Settings")}>
        <Icon name="cog" size={30} color="black" />
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "black",
    marginTop: 5,
  },
});




