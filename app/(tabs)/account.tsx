import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.header}>Gerenciar perfil</Text>

      <Text style={styles.sectionTitle}>Meu perfil</Text>
      
      <View style={styles.section}>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="person-outline" size={22} color="#000" style={styles.icon} />
          <View>
            <Text style={styles.itemText}>Dados pessoais</Text>
            <Text style={styles.subText}>Informações pessoais</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Configurar conta</Text>

      <View style={styles.sectionOne}>
 
        <TouchableOpacity style={styles.item}>
          <Ionicons name="location-outline" size={22} color="#000" style={styles.icon} />
          <View>
            <Text style={styles.itemText}>Endereços</Text>
            <Text style={styles.subText}>Lugares salvos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <MaterialIcons name="credit-card" size={22} color="#000" style={styles.icon} />
          <View>
            <Text style={styles.itemText}>Cartões</Text>
            <Text style={styles.subText}>Dados seguros</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <FontAwesome5 name="trash" size={22} color="red" style={styles.icon} />
          <Text style={[styles.itemText, { color: "red" }]}>Excluir conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E5E5E5" },
  header: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: '#f9f9f9',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionOne: {
    marginTop: 16,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingBottom : '200%',
  },

  section: {
    marginTop: 16,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionTitle: {

    fontSize: 13,
    fontWeight: "400",
    color: "#323131",
    marginTop: 10,
    marginLeft: 20
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  icon: { marginRight: 12 },
  itemText: { fontSize: 15, fontWeight: "500" },
  subText: { fontSize: 12, color: "#666" },
});