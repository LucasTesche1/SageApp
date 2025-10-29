import LoginFormEmployee from "@/components/LoginFormEmployee";
import { login } from "@/services/Authentication";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import React from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";



export default function WelcomeScreen() {

  async function handleLoginEmployee(email:string, password:string) {
    try{
      const response = await login({email, password});
      console.log("Usuário logado: ", response);
      router.push("/welcomeEmployee");
    }catch(error){
      console.error("Erro no login: ",error);
      Alert.alert("Erro", "Email ou senha inválidos");
    }
    
  }
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

                    <LoginFormEmployee onSubmit={handleLoginEmployee}/>


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



});
