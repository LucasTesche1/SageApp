import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CardEdit({ navigation }: { navigation?: any }) {
  const [cardType, setCardType] = useState<"credito" | "debito" | null>("credito");
  const [cardNumber, setCardNumber] = useState("XXX XXX XXX");
  const [expiry, setExpiry] = useState("mm/yy");
  const [cvv, setCvv] = useState("XXX");
  const [owner, setOwner] = useState("XXXXXXXXXX");
  const [nickname, setNickname] = useState("XXXXXXXXXX");

  function handleSave() {
    Alert.alert("Salvo", "Dados do cartão salvos (substitua por chamada API).");
    router.push('/account');
    console.log({ cardType, cardNumber, expiry, cvv, owner, nickname });
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cartões</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Seleção de tipo de cartão */}
        <View style={styles.cardTypeRow}>
          <TouchableOpacity
            style={[
              styles.cardTypeBox,
              cardType === "credito" && styles.cardTypeBoxSelected,
            ]}
            onPress={() => setCardType("credito")}
          >
            <Image
              source={require("@/assets/cards/mastercard.png")}
              style={{ width: 40, height: 30 }}
              resizeMode="contain"
            />
            <Text style={styles.cardTypeText}>Cartão de crédito</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.cardTypeBox,
              cardType === "debito" && styles.cardTypeBoxSelected,
            ]}
            onPress={() => setCardType("debito")}
          >
            <Image
              source={require("@/assets/cards/mastercard.png")}
              style={{ width: 40, height: 30 }}
              resizeMode="contain"
            />
            <Text style={styles.cardTypeText}>Cartão de débito</Text>
          </TouchableOpacity>
        </View>

        {/* Campos do formulário */}
        <Text style={styles.label}>Número do cartão</Text>
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flex: 0.48 }}>
            <Text style={styles.label}>Vencimento</Text>
            <TextInput style={styles.input} value={expiry} onChangeText={setExpiry} />
          </View>
          <View style={{ flex: 0.48 }}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={setCvv}
              secureTextEntry
            />
          </View>
        </View>

        <Text style={styles.label}>Proprietário</Text>
        <TextInput style={styles.input} value={owner} onChangeText={setOwner} />

        <Text style={styles.label}>Apelido do cartão</Text>
        <TextInput
          style={styles.input}
          value={nickname}
          onChangeText={setNickname}
        />

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    top:10,
    marginBottom:10,
    height: 72,
    backgroundColor: "#15d9d2",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 6,
  },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "600" },

  container: { padding: 20, paddingBottom: 120 },

  // Seleção de tipo de cartão
  cardTypeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  cardTypeBox: {
    flex: 0.48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cardTypeBoxSelected: {
    borderColor: "#15d9d2",
    borderWidth: 2,
  },
  cardTypeText: {
    marginTop: 8,
    fontSize: 13,
    color: "#333",
    fontWeight: "500",
  },

  label: { marginTop: 10, marginBottom: 6, color: "#222", fontWeight: "600" },
  input: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },

  saveBtn: {
    marginTop: 24,
    alignSelf: "center",
    backgroundColor: "#2fe3dd",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    minWidth: 200,
    alignItems: "center",
  },
  saveBtnText: { color: "#fff", fontWeight: "600" },
});
