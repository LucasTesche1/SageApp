import { StyleSheet, TouchableOpacity } from 'react-native';
//import { sendPrompt } from "@/components/ChatBot";
import * as Font from 'expo-font';
import { router } from 'expo-router';
import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View
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
       
      <View style={styles.header}>
        <Text style={{textAlign : 'left' ,fontFamily: 'Michroma-Regular', fontSize: 45, color:'#00CED1', fontWeight:'700'}}>SAGE AI</Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(tabs)')}
        >
          <Image
            source={require('@/assets/images/sageult.png')}
            style={styles.icon}
          />
        
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Como posso te ajudar?"
        value={input}
        onChangeText={setInput}
      />

      <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonSend,
          pressed && { opacity: 0.6 } // muda a opacidade quando pressionado
        ]}
        onPress={handleSend}
      >
        <Text style={{  fontFamily: 'Tahoma', fontWeight: '500' }}>Enviar</Text>
      </Pressable>
      </View>
      <Text style={styles.response}>{resposta}</Text>
    </SafeAreaView>
    

    
  );
  
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, },
  input: { 
    borderRadius: 10, 
    borderWidth: 2, 
    borderColor: "#D2D2D2", 
    marginBottom: 10, 
    padding:100, 
    marginHorizontal : 22,
    textAlign:'center',
    textAlignVertical: 'top', 

    color:'#847E7E',
    fontFamily:'Arial'
  
  },
  response: { marginTop: 20, fontSize: 16 },

  baseText: {
    fontFamily : ''
  },

  header:{
    paddingBottom: 30,
    paddingLeft: 20,
    paddingTop: 30,
    flexDirection: 'row',
    gap:70
  },

  buttonContainer:{
    display: 'flex',
    alignItems : 'center',
    top:10
  },

  button: {
    top:5,
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 5,
    

  },

  buttonSend: {
    top:5,
    width: 200,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 5,
    
  },
  icon: {    
    top : 3,
    width : 50,
    height : 50,
    resizeMode : 'contain',
  }

});


export default App;