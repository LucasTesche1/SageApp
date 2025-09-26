import { sendPrompt } from '@/services/Gemini';
import { useFocusEffect } from '@react-navigation/native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  SafeAreaView, StyleSheet, Text,
  TextInput, TouchableOpacity, View
} from 'react-native';

const App = () => {
  useFocusEffect(
  React.useCallback(() => {
      Alert.alert("Aviso", "O SageAI ainda está em desinvolvimento, procure sempre ser objetivo na pergunta, por exemplo: 'Estou com dor nos olhos'.");
    }, [])
  );

  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const [prompt, setPrompt] = useState("");
  const [resposta, setResposta] = useState("");
  const [loading, setLoading] = useState(false);
  const [typedText, setTypedText] = useState("");

  const loadFonts = async () => {
  await Font.loadAsync({
      'Michroma-Regular': require('@/assets/fonts/Michroma-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  React.useEffect(() => {
    loadFonts();
  }, []);


  const handleSend = async () => {
    try {

      setLoading(true);

      const data = await sendPrompt(prompt);
      setResposta(data.resposta);
      setTypedText(data.resposta.charAt(0));

      let i = 0;
      const intervalo = setInterval(() => {
        setTypedText((prev) => prev + data.resposta.charAt(i));
        i++;
        if (i >= data.resposta.length) clearInterval(intervalo);
      }, 40) //40ms por letra

    } catch (error) {
      setResposta("Erro ao enviar pergunta: " + error);
      setTypedText("");
    } finally{
      setLoading(false);
    }
  }

  return (


    <SafeAreaView style={styles.container}>               
       <LinearGradient
        colors={['#FFFFFF', '#FFFFFF', '#00CED1']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradiant}
      >
      <View style={styles.header}>
        <Text style={{textAlign : 'left' ,fontFamily: 'Michroma-Regular', fontSize: 40, color:'#00CED1'}}>SAGE AI</Text>
        
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
        value={prompt}
        onChangeText={setPrompt}
      />

      <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonSend,
          pressed && { opacity: 0.6 } 
        ]}
        onPress={handleSend}
      >
        <Text style={{  fontFamily: 'Tahoma', fontWeight: '500' }}>Enviar</Text>
      </Pressable>
      </View>

      
      {/* Mostra o loading */}
      {loading && <ActivityIndicator size='large' color="#00CED1" />}
      

      <View style={styles.containerResponse}>
      <Text style={styles.response}>{typedText}</Text>
      </View>
      </LinearGradient>
    </SafeAreaView>
    

    
  );
  
};


const styles = StyleSheet.create({

  gradiant:{
    width: '100%',
    height: '100%'
  },

  container: { 
    flex: 1, 
    padding: 20, 

  },

  input: { 
    borderRadius: 10, 
    borderWidth: 2, 
    borderColor: "#D2D2D2", 

    marginBottom: 10, 
    marginHorizontal: 22,
    padding: 15,
    height: 100, 

    textAlign: 'left', 
    textAlignVertical: 'top', 
    color:'#847E7E',
    fontFamily:'Arial',
    fontSize: 16,
    
  
  },

  containerResponse:{

    flex:1,
    marginHorizontal:30,
    top:50,
    backgroundColor:'#00CED1',
    borderRadius:10,

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },

  response: { 

    padding:30,
    marginTop: 20, 
    fontSize: 20,
    fontFamily:'Arial',
    color:'#fff',
    letterSpacing:1.5

  },

  baseText: {
    fontFamily : ''
  },

  header:{
    paddingBottom: 30,
    paddingLeft: 20,
    paddingTop: 30,
    flexDirection: 'row',
    
  },

  buttonContainer:{
    display: 'flex',
    alignItems : 'center',
    top:10
  },

  button: {
    top:1,
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    marginLeft:90
    
    

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