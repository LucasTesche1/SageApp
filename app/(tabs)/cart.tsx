import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [value, setValue] = useState(1);
  const [cupom, setCupom] = useState("");
  const [desconto, setDesconto] = useState(0);

  const totalOriginal = 20; // total base
  const totalComDesconto = totalOriginal - desconto;

  const increment = () => setValue(value + 1);
  const decrement = () => {
    if (value > 1) setValue(value - 1);
  };

  const aplicarCupom = () => {
    if (cupom.toUpperCase() === "DESCONTO5") {
      setDesconto(5);
      alert("Cupom aplicado! Você ganhou R$5 de desconto 🎉");
    } else {
      setDesconto(0);
      alert("Cupom inválido ❌");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>SAGE</Text>
          <TouchableOpacity
            style={styles.logoImg}
            onPress={() => router.push('/(tabs)')}
          >
            <Image
              source={require('@/assets/images/image.png')}
              style={styles.logoImg}/>
          </TouchableOpacity>        
        </View>

        {/* CARDS */}
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Image source={require("@/assets/images/remedios/1.png")} style={styles.logoImgRemedio}/>
            <Text style={styles.cardDescricao}>Lorem Ipson Lorem</Text>
            <Text style={styles.cardMg}>150 mg</Text>

            <View style={styles.cardBtns}>
              <TouchableOpacity style={styles.button} onPress={decrement}>
                <Ionicons name="remove" size={22} color="#00CED1" />
              </TouchableOpacity>

              <Text style={styles.value}>{value}</Text>

              <TouchableOpacity style={styles.button} onPress={increment}>
                <Ionicons name="add" size={22} color="#00CED1" />
              </TouchableOpacity>
            </View>

          </View>

          {/* Replicar seus outros cards aqui (não mudei) */}
        </View>

      </View>

      {/* CUPOM */}
      <View style={styles.cupomContainer}>
        <Text style={styles.labelCupom}>Cupom de desconto:</Text>
        <TextInput
          style={styles.inputCupom}
          placeholder="Digite o cupom"
          value={cupom}
          onChangeText={setCupom}
        />
        <Pressable style={styles.aplicarCupom} onPress={aplicarCupom}>
          <Text style={{ color:"#fff", fontWeight:"bold" }}>Aplicar</Text>
        </Pressable>
      </View>

      {/* TOTAL */}
      <View style={styles.buttonContainer}>
        <Text style={styles.total}>
          Total: R${totalComDesconto.toFixed(2)}
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.buttonSend,
            pressed && { opacity: 0.6 }
          ]}
          onPress={() => router.push('/confirmAddress')}
        >
          <Text style={{ color:'#fff', fontWeight:'bold'}}>Continuar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"#fff" },

  header: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:5,
    paddingVertical:5,
    marginTop:15
  },
  
  logo: { fontSize:40, color:"#00CED1", fontFamily:"Michroma", paddingLeft:20 },
  logoImg: { width:70, height:70, resizeMode:"contain" },

  cardsContainer:{ flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", marginHorizontal:10 },

  card:{ borderWidth:1, borderColor:"#d2d2d2", width:"48%", marginBottom:15, borderRadius:10, padding:20, alignItems:"center" },

  logoImgRemedio:{ width:"70%", height:100, resizeMode:"contain" },
  cardDescricao:{ fontSize:18, fontWeight:"400", textAlign:"center" },
  cardMg:{ fontSize:16, color:"#847E7E", fontStyle:"italic" },

  cardBtns:{ flexDirection:"row", alignItems:"center" },
  button:{ paddingHorizontal:5 },
  value:{ fontSize:18, fontWeight:"500" },

  /* CUPOM */
  cupomContainer:{ padding:20 },
  labelCupom:{ fontSize:16, marginBottom:5, fontWeight:"500" },
  inputCupom:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:8,
    padding:10,
    marginBottom:10
  },
  aplicarCupom:{
    backgroundColor:"#00CED1",
    padding:12,
    alignItems:"center",
    borderRadius:8
  },

  /* FOOTER */
  buttonContainer:{ flexDirection:'row', alignItems:'center', justifyContent:'space-around', paddingVertical:30 },
  total:{ fontSize:18 },

  buttonSend:{
    width:200, height:60, borderRadius:35, backgroundColor:'#00ced1c2',
    justifyContent:'center', alignItems:'center'
  }
});
