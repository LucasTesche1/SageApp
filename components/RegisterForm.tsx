import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function RegisterForm(){

  return (
        <View style={styles.container}>
            
            <TextInput 
                style={styles.input}
                placeholder="Nome de usuário"
                keyboardType="default"
                autoCapitalize="none"
            />
            
            <TextInput 
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry                    
            />
            
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
  }

});

