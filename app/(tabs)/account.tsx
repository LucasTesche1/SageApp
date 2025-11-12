import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default function AccountScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Gerenciar perfil</Text>

      <Text style={styles.sectionTitle}>Meu perfil</Text>

      <View style={styles.section}>
        <TouchableOpacity style={styles.item}>
          <Ionicons
            name="person-outline"
            size={22}
            color="#000"
            style={styles.icon}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                router.push('/edit'); 
              }}>
              <Text style={styles.itemText}>Dados pessoais</Text>
            <Text style={styles.subText}>Informações pessoais</Text>
            </TouchableOpacity>            
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Configurar conta</Text>

      <View style={styles.sectionOne}>
        <TouchableOpacity style={styles.item}>
          <Ionicons
            name="location-outline"
            size={22}
            color="#000"
            style={styles.icon}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                router.push('/addressEdit'); 
              }}>
            <Text style={styles.itemText}>Endereços</Text>
            <Text style={styles.subText}>Lugares salvos</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <MaterialIcons
            name="credit-card"
            size={22}
            color="#000"
            style={styles.icon}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                router.push('/cardEdit'); 
              }}>
            <Text style={styles.itemText}>Cartões</Text>            
            <Text style={styles.subText}>Dados seguros</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => router.push('/fav')}>
          <FontAwesome5
            name="star"
            size={22}
            color="gold"
            style={styles.icon}
          />
          <Text style={[styles.itemText]}>Favoritos</Text>
          
        </TouchableOpacity>        

        <TouchableOpacity style={styles.item} onPress={() => setModalVisible(true)}>
          <FontAwesome5
            name="trash"
            size={22}
            color="red"
            style={styles.icon}
          />
          <Text style={[styles.itemText, { color: "red" }]}>Excluir conta</Text>
          
        </TouchableOpacity>


      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FontAwesome5 name="trash" size={40} color="red" />
            <Text style={styles.modalTitle}>Excluir conta</Text>
            <Text style={styles.modalText}>
              Após exclusão, todos seus dados serão apagados.{"\n"}
              Tem certeza que deseja continuar?
            </Text>

            <TouchableOpacity
              style={styles.voltarButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.voltarText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.excluirButton}
              onPress={() => {
                setModalVisible(false);
                router.push("/welcome"); 
              }}
            >
              <Text style={styles.excluirText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    backgroundColor: "#f9f9f9",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionOne: {
    marginTop: 16,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingBottom: "200%",
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
    marginLeft: 20,
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

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 25,
    alignItems: "center",
    width: 280,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    marginTop: 10,
  },
  modalText: {
    textAlign: "center",
    color: "#555",
    marginVertical: 15,
  },
  voltarButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  voltarText: {
    color: "#000",
    fontWeight: "600",
  },
  excluirButton: {
    backgroundColor: "red",
    borderRadius: 8,
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  excluirText: {
    color: "#fff",
    fontWeight: "600",
  },
});
