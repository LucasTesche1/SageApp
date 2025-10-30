import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface LoginFromProps {
  onSubmit:(email: string, password: string) => void;
}


export default function LoginFormEmployee({onSubmit}: LoginFromProps){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
        <View style={styles.container}>
            
            
            <TextInput 
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Senha"
                secureTextEntry                    
            />
            
            <View style={styles.containerButtons}>
                <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => onSubmit(email, password)}
                ><Text>Entrar</Text></TouchableOpacity>
            </View> 
      </View>

  );
}

const styles = StyleSheet.create({

  container: {
    top:50,
    alignItems:'center',
    backgroundColor: "#fff",
    justifyContent:'space-evenly'
  },

  
  input:{
    width: 350,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 10,
 },

  defaultText:{
  fontSize: 20,
  color: "#00CED1",
  fontFamily: "Arial",
  textAlign:'center',
  bottom:20,
  textDecorationLine: 'underline',
  
  },

    btnLogin:{
    width: 350,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#00D138', 
    color:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'Arial',
  },

  
  containerButtons:{
    flex: 1, 
    top:100,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: "#fff" ,
    gap:10
  },
});

