import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Payment() {
  const [selected, setSelected] = useState<string>("boleto");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Método de pagamento</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.optionBox,
          selected === "boleto" && styles.optionBoxSelected,
        ]}
        onPress={() => setSelected("boleto")}
      >
        <View style={styles.radioRow}>
          <View
            style={[
              styles.radioCircle,
              selected === "boleto" && styles.radioSelected,
            ]}
          />
          <Text style={styles.optionTitle}>Boleto bancário</Text>
        </View>
        <Ionicons name="barcode-outline" size={40} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionBox,
          selected === "pix" && styles.optionBoxSelected,
        ]}
        onPress={() => setSelected("pix")}
      >
        <View style={styles.radioRow}>
          <View
            style={[
              styles.radioCircle,
              selected === "pix" && styles.radioSelected,
            ]}
          />
          <Image
            source={require("../assets/images/pix-logo.png")}
            style={styles.pixLogo}
          />
          <Text style={styles.pixText}>PIX</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Cartões</Text>
      {["Cartão 1", "Cartão 2"].map((label, i) => (
        <TouchableOpacity
          key={i}
          style={[
            styles.optionBox,
            selected === label && styles.optionBoxSelected,
          ]}
          onPress={() => setSelected(label)}
        >
          <View style={styles.radioRow}>
            <View
              style={[
                styles.radioCircle,
                selected === label && styles.radioSelected,
              ]}
            />
            <Text style={styles.optionTitle}>{label}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText} onPress={() => router.push('/confirmEnd')}>Continuar</Text>
      </TouchableOpacity>

      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="#00C2CB" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="#00C2CB" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="#00C2CB" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#00C2CB",
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  optionBox: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  optionBoxSelected: {
    borderColor: "#00C2CB",
    borderWidth: 1.5,
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: "#888",
    marginRight: 10,
  },
  radioSelected: {
    backgroundColor: "#00C2CB",
    borderColor: "#00C2CB",
  },
  optionTitle: {
    fontSize: 16,
    color: "#333",
  },
  pixLogo: {
    width: 32,
    height: 32,
    marginRight: 5,
  },
  pixText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#00C2CB",
  },
  sectionTitle: {
    marginTop: 20,
    width: "85%",
    color: "#555",
    fontWeight: "600",
  },
  continueButton: {
    backgroundColor: "#00C2CB",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 25,
  },
  continueText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
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
