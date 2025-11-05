import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RemedioPage() {
  const [quantidade, setQuantidade] = useState(2);
    const navigation = useNavigation<any>();


  return (
    <ScrollView style={styles.container}>
      {/* BARRA DE PESQUISA */}
      <View style={styles.header}>

        <TouchableOpacity style={styles.boxBackArrow} onPress={() => navigation.goBack()}>
          <Ionicons style={styles.backArrow} name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            placeholder="O que está procurando?"
            />
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon}/>
        </View>

      </View>

      {/* Título */}
      <Text style={styles.titulo}>Ibuprofeno 50mg</Text>

      {/* Imagem */}
      <View style={styles.imageContainer}>
        <Ionicons name="chevron-back" size={28} color="#999" />
        <Image source={require("@/assets/images/remedios/1.png")}style={styles.image}/>
        <Ionicons name="chevron-forward" size={28} color="#999" />
      </View>

      {/* Preço e botão */}
      <View style={styles.priceBox}>
        <Text style={styles.oferta}>Oferta exclusiva</Text>

        <View style={styles.priceBoxBody}>
          <Text style={styles.preco}>R$22,04</Text>
          <View style={styles.qtdContainer}>
          <TouchableOpacity onPress={() => setQuantidade(Math.max(1, quantidade - 1))}>
            <Text style={styles.qtdButton}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qtdText}>{quantidade}</Text>

          <TouchableOpacity onPress={() => setQuantidade(quantidade + 1)}>
            <Text style={styles.qtdButton}>+</Text>A
          </TouchableOpacity>
          </View>
        </View>


        <TouchableOpacity style={styles.botaoCarrinho}>
          <Text style={styles.botaoTexto} onPress={() => router.push("/cart")}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>

      {/* Continue comprando */}
      <Text style={styles.subtitulo}>Continue comprando</Text>

      <View style={styles.sugestoesContainer}>
        <View style={styles.sugestoesImgAux}>
          <Image source={require("@/assets/images/remedios/1.png")}style={styles.sugestao}/>  
        </View>
        <View style={styles.sugestoesImgAux}>
          <Image source={require("@/assets/images/remedios/1.png")}style={styles.sugestao}/>  
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

    header:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  },

    boxBackArrow:{
    display:'flex',
    paddingLeft:10,
    marginTop:10
  },
  
  backArrow:{
    color:'#fffff',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderRadius:'50%',
    borderColor:'#d2d2d2',
    padding:5
  },



  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    width:"80%",
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
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

  titulo: {
    margin: 15,
    fontSize: 18,
    fontWeight: "400",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 200,
    resizeMode: "contain",
    marginHorizontal: 15,
  },
  priceBox: {
    backgroundColor: "#fafafa",
    margin: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
    borderWidth: 1,
    borderColor: "#847E7E80"
  },
  priceBoxBody:{
    display:"flex",
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between"
  },
  oferta: {
    width:"100%",
    display:"flex",
    justifyContent:"flex-start",
    color: "#098902",
    fontSize: 14,
    marginBottom: 5,
  },
  preco: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 10,
  },
  qtdContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  qtdButton: {
    fontSize: 26,
    paddingHorizontal: 15,
    color: "#00CED1",
  },
  qtdText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  botaoCarrinho: {
    backgroundColor: "#c00",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  subtitulo: {
    color: "#c00",
    width:"90%",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 20,
    marginBottom: 10,
    paddingBottom:10,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  sugestoesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 80,
  },
  sugestoesImgAux:{
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d2d2d2",
    padding:10
  },

  sugestao: {
    width: 120,
    height: 140,
    margin: 10,    
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});
