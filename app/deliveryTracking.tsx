import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DeliveryTrackingScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Entrega</Text>
      </View>

      <Text style={styles.title}>A caminho!</Text>

      <View style={styles.steps}>
        <View>
            <View style={styles.stepActive}>
            <Ionicons style={styles.stepTextActiveIcon} name="checkmark" size={34} color="#fff" />
            </View>
            <Text style={styles.stepTextActive}>Preparando</Text>
        </View>

        <View style={styles.line} />
        <View style={styles.stepInactive}>
          <Text style={styles.stepText}>Indo até você</Text>
        </View>

        <View style={styles.line} />
        <View style={styles.stepInactive}>
          <Text style={styles.stepText}>Chegou!</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpText}>Preciso de ajuda</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.confirmText} onPress={() => router.push('/(tabs)/account')}>Confirmar entrega</Text>
      </TouchableOpacity>

      <View style={styles.bottomMenu}>
        <Ionicons name="home-outline" size={24} color="#00C2CB" />
        <Ionicons name="person-outline" size={24} color="#00C2CB" />
        <Ionicons name="cart-outline" size={24} color="#00C2CB" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", alignItems: "center" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00C2CB",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 10,
  },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "600" },
  title: { fontSize: 22, marginTop: 30, fontWeight: "600", color: "#333" },
  steps: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding:20,
    marginVertical: 40,
  },
  stepActive: {
    alignItems: "center",
    backgroundColor: "#00C2CB",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
  },
  stepInactive: {
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
  },
  line: {
    width: 40,
    height: 2,
    backgroundColor: "#484848ff",
    marginHorizontal:5
  },
  stepText: { fontSize: 12, color: "#000000ff", marginTop: 0},
  stepTextActiveIcon: { fontSize: 32, fontWeight:'700', color: "#000000ff",  },
  stepTextActive: {position:'absolute',textAlign:'center',fontWeight:'600', fontSize: 12, color: "#000000ff", top: 80, left:10 },
  helpButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
  },
  helpText: { color: "#333", fontWeight: "500" },
  confirmButton: {
    backgroundColor: "#0e9f29ff",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  confirmText: { color: "#fff", fontWeight: "600", fontSize: 15 },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 25,
    position: "absolute",
    bottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
});
