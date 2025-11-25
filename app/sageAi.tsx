import { sendPrompt } from '@/services/Gemini';
import { Ionicons } from '@expo/vector-icons';
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
      Alert.alert("Aviso", "O SageAI ainda está em desenvolvimento, procure sempre ser objetivo na pergunta, por exemplo: 'Estou com dor nos olhos'. Lembre-se, essa IA não substitui o diagnóstico médico ou as orientações de um profissional! Apenas trás dados baseados em médias e resumos públicos.");
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
        colors={['#F0F8FF', '#F0F8FF', '#00BCD4']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradiant}
      >
      <View style={styles.header}>
        <Text style={{textAlign : 'left' ,fontFamily: 'Michroma-Regular', fontSize: 40, color:'#00CED1'}}>SAGE </Text>
        <Text style={{textAlign : 'left' ,fontFamily: 'Michroma-Regular', fontSize: 40, color:'#23fbffa8'}}>AI</Text>
        
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

      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Como posso te ajudar?"
        value={prompt}
        onChangeText={setPrompt}        
      />
      <Ionicons name="search" size={20} color="#888" style={styles.searchIcon}/>
      </View>

      
      

      <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonSend,
          pressed && { opacity: 0.6 } 
        ]}
        onPress={handleSend}
      >
        {/*vetor de fundo*/}
        <Image
          source={require('@/assets/images/sageAi/Vector1.png')}
          style={styles.img}
        />

        <View style={styles.row}>
        <Text style={{  fontFamily: 'Tahoma', fontWeight: '500' }}>Enviar</Text>
        <Ionicons name="send" size={20} color="#000" style={styles.sendIcon}/>
        </View>
      </Pressable>
      </View>

      
      {/* mostra o loading */}
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

  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 50, 
    borderColor: "#fff", 
    backgroundColor: '#fff',
    borderWidth:10,
    
    marginBottom: 10, 
    marginHorizontal: 22,
    padding: 15,
    height: 60, 

    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },

  img:{
    ...StyleSheet.absoluteFillObject,
    resizeMode:'cover',
    marginLeft:3,
    top:34.5,
    
  },

  row:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
   
  },

  input: { 
    flex:1,
    height:60,
    textAlign: 'left', 
    letterSpacing:0.5,
    textAlignVertical: 'top', 
    color:'#847E7E',
    fontFamily:'Roboto',
    fontSize: 16,

  },

  searchIcon:{
    width:20,
    height:20
  },

  sendIcon:{
    
    position:'absolute',
    left:70,
    width:20,
    height:20

  },

  containerResponse:{

    flex:1,
    marginHorizontal:30,
    top:50,
    backgroundColor:'#00ced12d',
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
    fontFamily:'Roboto',
    fontWeight:'500',
    color:'#007c77',
    letterSpacing:1.3,

    
    

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
    justifyContent:'center',
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