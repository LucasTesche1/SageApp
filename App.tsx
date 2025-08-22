import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { sendPrompt } from "./src/services/gemini";

const App = () => {
  const [input, setInput] = useState("");
  const [resposta, setResposta] = useState("");

  async function handleSend() {
    try {
      const result = await sendPrompt(input);
      setResposta(result);
    } catch (err: any) {
      setResposta("Erro: " + err.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu prompt..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Enviar" onPress={handleSend} />
      <Text style={styles.response}>{resposta}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", marginBottom: 10, padding: 10 },
  response: { marginTop: 20, fontSize: 16 },
});

export default App;
