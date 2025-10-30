import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FaqScreen() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [fontsLoaded] = useFonts({
    Michroma: require("../../assets/fonts/Michroma-Regular.ttf"),
  });
  const faqs = [
    { id: 1, question: "Lorem IpsonLorem Ipson?", answer: "Resposta detalhada da primeira FAQ. lorem Ipson lorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipsonlorem Ipson" },
    { id: 2, question: "Lorem Ipson", answer: "Resposta detalhada da segunda FAQ." },
    { id: 3, question: "Lorem IpsonLorem IpsonLorem Ipson", answer: "Resposta detalhada da terceira FAQ." },
    { id: 4, question: "Lorem IpsonLorem Ipson", answer: "Resposta detalhada da quarta FAQ." },
    { id: 5, question: "Lorem IpsonLorem Ipson", answer: "Resposta detalhada da quinta FAQ." },
    { id: 6, question: "Lorem Ipson", answer: "Resposta detalhada da sexta FAQ." },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <Stack.Screen options={{ headerShown: false }} />  
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>FAQ</Text>
        </View>

      <View style={styles.circleRow}>
      <LinearGradient
      colors={['rgba(255, 255, 255, 0.7)', 'transparent']} 
      style={styles.vignette}
      />

      <TouchableOpacity
          style={styles.circleAlt}   
          onPress={() => router.push('/employeeIndex')}
      
      >
      <Text style={styles.circleText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.circle}   
      >
      <Image
          source={require('@/assets/images/bubble.png')}
          style={styles.img}
          /> 
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.circleAlt}   
          onPress={() => router.push('/employeeIndex')}
      
      >
    <Text style={styles.circleText}>Conta</Text>
    </TouchableOpacity>
    </View>

    
        {/* LISTA DE FAQ */}
        {faqs.map((item) => (
          <View key={item.id} style={styles.faqItem}>
            <TouchableOpacity
              style={styles.faqHeader}
              onPress={() => setExpanded(expanded === item.id ? null : item.id)}
            >
              <Text style={styles.faqQuestion}>{item.question}</Text>
              <Ionicons
                name={expanded === item.id ? "remove" : "add"}
                size={20}
                color="#333"
              />
            </TouchableOpacity>
            {expanded === item.id && (
              <Text style={styles.faqAnswer}>{item.answer}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },


  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  backText: {
    fontSize: 15,
    color: "rgba(0, 206, 209, 0.7)",
    marginLeft: 5,
    fontWeight: "600",
  },

  /** HEADER **/
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },

  logo: {
    fontSize: 40,
    color: "#00D138",
    fontFamily: "Michroma",
    paddingLeft: 20,
  },

  logoImg: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    paddingRight: 60,
    top: 1,
  },


  titleBox: {
    backgroundColor: "#00D138",
    paddingVertical: 10,
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },


  faqItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQuestion: {
    fontWeight: "500",
    color: "#333",
  },
  faqAnswer: {
    marginTop: 8,
    color: "#555",
    lineHeight: 20,
  },

    circleRow:{
    flexDirection: "row",
    justifyContent: "center",
    gap:20,
    marginVertical: 5,
    backgroundColor: "#00D138",
    padding: 10,
  },

  vignette: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    alignItems : 'center'
  },

  circleAlt:{
    width: 120,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    alignItems : 'center',
    justifyContent : 'center',

  },

  circleText:{
    marginTop:-4,
    fontSize:16,
    fontFamily:'Michroma',
    fontWeight:'500',
    letterSpacing:0.5


  },

  img:{        
    width : 60,
    height :60,
    resizeMode : 'contain',
  },
});
