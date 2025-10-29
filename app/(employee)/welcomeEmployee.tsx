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
          <Image source={require("@/assets/images/sage-logo-green.png")}/>
          <Text style={styles.logoText}>SAGE</Text>
          <Text style={styles.logoText}>FUNCIONÁRIO</Text>
                      
        </View>
        <View style={styles.containerButtons}>
          
          <Text style={{fontWeight:'600'}}>Eu sou:</Text>
          <TouchableOpacity 
          style={styles.btnLogin}
          onPress={() => router.push('/employeeIndex')}
          >COLABORADOR</TouchableOpacity>
          
          <TouchableOpacity 
          style={styles.btnRegister}
          onPress={() => router.push('/welcomeEmployee')}
          >ENTREGADOR</TouchableOpacity>
        </View>

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
    top:5,
    fontSize: 40,
    color: "#00D138",
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
    backgroundColor: '#00D138', 
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
