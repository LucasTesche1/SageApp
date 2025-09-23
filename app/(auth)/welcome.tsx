import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function WelcomeScreen() {
  const [fontsLoaded] = useFonts({
    Michroma: require("../../assets/fonts/Michroma-Regular.ttf"),
  });
  return (

    <>
      
      <Stack.Screen options={{ headerShown: false }} />
      
      <View style={styles.container}>
        <View style={styles.logoImg}>
          <Image source={require("@/assets/images/login-logo.png")}/>
          <Text style={styles.logoText}>SAGE</Text>
                      
        </View>
        <View style={styles.containerButtons}>
          
          <TouchableOpacity 
          style={styles.btnLogin}
          onPress={() => router.push('/login')}
          >Login</TouchableOpacity>
          
          <TouchableOpacity 
          style={styles.btnRegister}
          >Cadastro</TouchableOpacity>
        </View>


          <TouchableOpacity 
          style={styles.defaultText}
          >Login Funcionário</TouchableOpacity>
      </View>
    
    
    
    </>
    
  );
}



const styles = StyleSheet.create({

  container: { 

    flex: 1, 
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: "#fff" 
  },

  containerButtons:{
    flex: 1, 
    top:100,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: "#fff" ,
    gap:10
  },
 
  logoImg:{
    
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    top:110
    

  },

  logoText:{
    fontSize: 40,
    color: "#00CED1",
    fontFamily: "Michroma",
    textAlign:'center',
    fontWeight:'bold'
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
    backgroundColor: '#00ced1c2', 
    color:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'Arial',
  },
  
  btnRegister:{
    width: 350,
    height: 60,
    borderWidth:1,
    borderRadius: 10,
    borderColor:'#000',
    backgroundColor: '#fff', 
    color:'#000',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'Arial',
  }



});
