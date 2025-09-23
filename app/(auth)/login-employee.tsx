import LoginForm from "@/components/LoginForm";
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
                    <View style={styles.returnContainer}>
                    <TouchableOpacity 
                    onPress={() => router.push('/welcome')}
                    >
                    <Image
                    source={require("@/assets/images/return.png")}/></TouchableOpacity>


                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.logoText}>LOGIN FUNCIONÁRIO</Text>            
                    </View>

                    <LoginForm/>
                    
                    <View style={styles.containerButtons}>
                        <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={() => router.push('/')}
                        >Entrar</TouchableOpacity>
                    </View>

                </View>
            
        </>
        
    );
};



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

  returnContainer:{
    paddingBottom:100,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginRight:'auto',
    left:35,
    top:35,
    backgroundColor: "#fff" ,
  },

  textContainer:{
    width:350,
  },

  formContainer:{

  },
 
  logoText:{
    fontSize: 30,
    color: "#00D138",
    fontFamily: "Michroma",
    textAlign:'left',
    fontWeight:'bold'
  },

  defaultText:{
    fontSize: 20,
    color: "#00D138",
    fontFamily: "Arial",
    textAlign:'center',
    bottom:20,
    textDecorationLine: 'underline',
    fontWeight:'bold'
  
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
