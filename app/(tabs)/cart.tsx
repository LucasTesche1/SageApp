import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function AccountScreen() {
  return (
    <View>
      <Image
        source={require('@/assets/images/inprogress.jpg')}
        style={styles.img}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E5E5E5" },
  img:{width:'100%', height:400, top:200},

});
