import { IconSymbol } from "@/components/ui/IconSymbol";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import React from "react";
import { Image, Touchable, TouchableOpacity,ScrollView, StyleSheet, Text, TextInput, View } from "react-native";



export default function HomeScreen() {

  const [fontsLoaded] = useFonts({
    Michroma: require("../../assets/fonts/Michroma-Regular.ttf"),
  });
  
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>SAGE</Text>
          <Image source={require("../../assets/images/image.png")} style={styles.logoImg}/>
      </View>

      {/* BARRA DE PESQUISA */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="O que está procurando?"
        />
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon}/>
      </View>

      <ScrollView>
        {/* CARROSSEL DE ICONES */}
        <View style={styles.circleRow}>
        <TouchableOpacity
          style={styles.circle}   
          onPress={() => router.push('/medicine')}
          
        >
        <Image
          source={require('@/assets/images/icon-pill.png')}
          style={styles.img}
        />  

        </TouchableOpacity>
          <View style={styles.circle}/>
          <View style={styles.circle}/>
          <View style={styles.circle}/>
        </View>

        {/* PRODUTOS */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productRow}>
          <Image source={require("../../assets/images/remedios/1.png")} style={styles.productImg}/>
          <Image source={require("../../assets/images/remedios/2.jpg")} style={styles.productImg}/>
          <Image source={require("../../assets/images/remedios/1.png")} style={styles.productImg}/>
          <Image source={require("../../assets/images/remedios/2.jpg")} style={styles.productImg}/>
        </ScrollView>

        {/* BANNER */}
        <View style={styles.banner}>
          <Image source={require("../../assets/images/remedios/logomain.png")} style={styles.bannerImg}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

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
  },

  logoImg: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#d2d2d2",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: { flex: 1, padding: 8 },
  searchIcon: { marginLeft: 5 },

  circleRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
    backgroundColor: "#00CED1",
    padding: 10,


  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
    // sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // sombra Android
    elevation: 6,

    //alinhar ícones
    alignItems : 'center'
  },
  
  productRow: {
    flexDirection: "row",
  },
  productImg: {
    width: 100,
    height: 130,
    resizeMode: "contain",
    marginRight: 3,
    paddingHorizontal: 5,
  },

  banner: {
    borderRadius: 12,
    paddingTop: 5,
    alignItems: "center",
  },
  // bannerText: { fontSize: 18, color: "#fff", textAlign: "center" },
  // bannerSub: { fontSize: 14, color: "#fff", marginTop: 5, marginBottom: 10 },
  bannerImg: { 
    width: 370,
    borderRadius: 12,
    height: 370,
    resizeMode: "contain" ,
  },

  img: { 
       
    top : 10,
    width : 37,
    height : 37,
    resizeMode : 'contain',
  }
});