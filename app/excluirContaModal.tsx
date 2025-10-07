import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ExcluirContaModal() {
  const [visible, setVisible] = useState(false);

  const handleExcluir = () => {
    // Aqui você pode chamar sua função para excluir a conta
    console.log("Conta excluída!");
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Botão que abre a modal */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => setVisible(true)}
      >
        <FontAwesome5 name="trash" size={22} color="red" style={styles.icon} />
        <Text style={[styles.itemText, { color: "red" }]}>Excluir conta</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.modalContent}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="trash" size={28} color="#fff" />
            </View>

            <Text style={styles.title}>Excluir conta</Text>

            <Text style={styles.message}>
              Após exclusão, todos seus dados serão apagados.{"\n"}
              Tem certeza que deseja continuar?
            </Text>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => setVisible(false)}
              >
                <Text style={styles.backText}>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleExcluir}
              >
                <Text style={styles.deleteText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: "#ffcccc",
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    textAlign: "center",
    color: "#333",
    fontSize: 14,
    marginBottom: 20,
  },
  buttonsContainer: {
    width: "100%",
    gap: 10,
  },
  backButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  backText: {
    color: "#333",
    fontWeight: "600",
  },
  deleteText: {
    color: "#fff",
    fontWeight: "600",
  },
});
