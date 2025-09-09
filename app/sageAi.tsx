import { StyleSheet } from 'react-native';
//import { sendPrompt } from "@/components/ChatBot";
import * as Font from 'expo-font';
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TextInput
} from "react-native";


const App = () => {
  
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const [input, setInput] = useState("");
  const [resposta, setResposta] = useState("");

  const loadFonts = async () => {
  await Font.loadAsync({
      'Michroma-Regular': require('@/assets/fonts/Michroma-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  React.useEffect(() => {
    loadFonts();
  }, []);

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

      <Text style={{ textAlign : 'left' ,fontFamily: 'Michroma-Regular', fontSize: 24, color:'#00CED1'}}>SAGE AI</Text>
      <TextInput
        style={styles.input}
        placeholder="Como posso te ajudar?"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Enviar" onPress={handleSend} />
      <Text style={styles.response}>{resposta}</Text>
    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, },
  input: { borderWidth: 1, borderColor: "#ccc", marginBottom: 10, padding: 100 },
  response: { marginTop: 20, fontSize: 16 },

  baseText: {
    fontFamily : ''
  },

});

export default App;