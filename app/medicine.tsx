
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function HomeScreen() {
  const [value, setValue] = useState(1);

  const increment = () => setValue(value + 1);
  const decrement = () => {
    if (value > 1) setValue(value - 1);
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

      {/* BARRA DE PESQUISA */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="O que está procurando?"
        />
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon}/>
      </View>

      {/* GRUPO DOS CARRIN */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image source={require("@/assets/images/remedios/1.png")} style={styles.logoImgRemedio}/>
          <Text style={styles.cardDescricao}>Lorem Ipson Lorem</Text>
          <Text style={styles.cardMg}>150 mg</Text>

          <View style={styles.cardBtns}>

          </View>

        </View>
        <View style={styles.card}>
          <Image source={require("@/assets/images/remedios/2.jpg")} style={styles.logoImgRemedio}/>
          <Text style={styles.cardDescricao}>Lorem Ipson Lorem </Text>
          <Text style={styles.cardMg}>150 mg</Text>

          <View style={styles.cardBtns}>

          </View>

        </View>
        <View style={styles.card}>
          <Image source={require("@/assets/images/remedios/3.jpg")} style={styles.logoImgRemedio}/>
          <Text style={styles.cardDescricao}>Lorem Ipson Lorem </Text>
          <Text style={styles.cardMg}>150 mg</Text>

          <View style={styles.cardBtns}>

          </View>

        </View>
        <View style={styles.card}>
          <Image source={require("@/assets/images/remedios/4.jpg")} style={styles.logoImgRemedio}/>
          <Text style={styles.cardDescricao}>Lorem Ipson Lorem </Text>
          <Text style={styles.cardMg}>150 mg</Text>

          <View style={styles.cardBtns}>

          </View>

        </View>
                <View style={styles.card}>
          <Image source={require("@/assets/images/remedios/1.png")} style={styles.logoImgRemedio}/>
          <Text style={styles.cardDescricao}>Lorem Ipson Lorem </Text>
          <Text style={styles.cardMg}>150 mg</Text>

          <View style={styles.cardBtns}>

          </View>

        </View>
                <View style={styles.card}>
          <Image source={require("@/assets/images/remedios/2.jpg")} style={styles.logoImgRemedio}/>
          <Text style={styles.cardDescricao}>Lorem Ipson Lorem </Text>
          <Text style={styles.cardMg}>150 mg</Text>

          <View style={styles.cardBtns}>

          </View>

        </View>
                <View style={styles.card}>
          <Image source={require("@/assets/images/remedios/3.jpg")} style={styles.logoImgRemedio}/>
          <Text style={styles.cardDescricao}>Lorem Ipson Lorem </Text>
          <Text style={styles.cardMg}>150 mg</Text>

          <View style={styles.cardBtns}>

          </View>

        </View>
                <View style={styles.card}>
          <Image source={require("@/assets/images/remedios/4.jpg")} style={styles.logoImgRemedio}/>
          <Text style={styles.cardDescricao}>Lorem Ipson Lorem </Text>
          <Text style={styles.cardMg}>150 mg</Text>

          <View style={styles.cardBtns}>

          </View>

        </View>
                <View style={styles.card}>
          <Image source={require("@/assets/images/remedios/1.png")} style={styles.logoImgRemedio}/>
          <Text style={styles.cardDescricao}>Lorem Ipson Lorem </Text>
          <Text style={styles.cardMg}>150 mg</Text>

          <View style={styles.cardBtns}>

          </View>

        </View>
      </View>
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff",

  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 15
  },
  
  logo: { 
    fontSize: 40,
    color: "#00CED1",
    fontFamily: "Michroma",
    paddingLeft : 20
  },

  logoImg: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    paddingRight : 60,
    top:1
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#d2d2d2",
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  input: { 
    flex: 1,
    padding: 8,
    color: '#838383ff'
  },

  searchIcon: { 
    marginLeft: 5 
  },

  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },

  card: {
    borderWidth: 1,
    borderColor: "#d2d2d2",
    width: "48%",
    height: "30%",
    marginBottom: 15,
    borderRadius: 10,
    gap:20,
    padding: 20,
    alignItems: "center",
  },

    logoImgRemedio: {
    width: "70%",
    height: "50%",
    resizeMode: "contain",
  },

  cardDescricao: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center", 
    color: "rgba(0, 0, 0, 1)",
  },

  cardMg: {
    fontSize: 16,
    fontWeight: "400",
    color: "#847E7E",
    fontStyle: "italic"
  },

  cardBtns:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    paddingHorizontal: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
});