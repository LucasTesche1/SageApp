import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ConfirmAddressScreen() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Entrega</Text>
      </View>

      <Text style={styles.title}>Confirme o endereço</Text>

      <TouchableOpacity
        style={[styles.addressBox, selected && styles.selectedBox]}
        onPress={() => setSelected(true)}
      >
        <View style={styles.row}>
          <View style={[styles.radio, selected && styles.radioSelected]} />
          <Text style={styles.addressText}>Rua João Medeiros, NUM 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.newAddress}>
        <Text style={styles.newAddressText}>
          Adicionar novo endereço{" "}
          <Text style={{ color: "#00C2CB", fontWeight: "bold" }}>+</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("DeliveryTracking")}
      >
        <Text style={styles.continueText} onPress={() => router.push('/deliveryTracking')}>Continuar</Text>
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
  title: {
    fontSize: 16,
    marginTop: 20,
    color: "#333",
    fontWeight: "500",
  },
  addressBox: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedBox: { borderColor: "#00C2CB", borderWidth: 1.5 },
  row: { flexDirection: "row", alignItems: "center" },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: "#777",
    marginRight: 10,
  },
  radioSelected: { backgroundColor: "#00C2CB", borderColor: "#00C2CB" },
  addressText: { color: "#333" },
  newAddress: {
    backgroundColor: "#EDEDED",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  newAddressText: { color: "#444" },
  continueButton: {
    backgroundColor: "#00C2CB",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 25,
  },
  continueText: { color: "#fff", fontWeight: "600", fontSize: 16 },
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
