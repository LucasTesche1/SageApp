import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { getAllItems, Item } from "../services/Itens"; // importa seu service

export default function HomeScreen() {
  const [itens, setItens] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarItens() {
      try {
        const data = await getAllItems();
        setItens(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    carregarItens();
  }, []);

  const imagens = [
    require("@/assets/images/remedios/1.png"),
    require("@/assets/images/remedios/2.jpg"),
    require("@/assets/images/remedios/3.jpg"),
    require("@/assets/images/remedios/4.jpg"),
  ];

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>SAGE</Text>
        <TouchableOpacity
          style={styles.logoImg}
          onPress={() => router.push("/(tabs)")}
        >
          <Image
            source={require("@/assets/images/image.png")}
            style={styles.logoImg}
          />
        </TouchableOpacity>
      </View>

      {/* BARRA DE PESQUISA */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="O que está procurando?"
        />
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
      </View>

      {/* LISTA DE CARDS DINÂMICOS */}
      <View style={styles.cardsContainer}>
        {loading ? (
          <Text style={{ textAlign: "center", marginTop: 20 }}>Carregando...</Text>
        ) : (
          itens.map((item, index) => (
            <View key={item.id} style={styles.card}>
              <Image
                source={imagens[index % imagens.length]} // alterna as imagens
                style={styles.logoImgRemedio}
              />
              <Text style={styles.cardDescricao}>{item.name}</Text>
              <Text style={styles.cardMg}>{item.dosage}</Text>
              <Pressable
                style={({ pressed }) => [
                  styles.buttonSee,
                  pressed && { opacity: 0.6 },
                ]}
                onPress={() => router.push("/remedioPage")}
              >
                <Text style={{ color: "#fff", fontFamily: "Tahoma" }}>Ver</Text>
              </Pressable>
            </View>
          ))
        )}
      </View>
    </ScrollView>
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
    marginTop: 15,
  },

  logo: {
    fontSize: 40,
    color: "#00CED1",
    fontFamily: "Michroma",
    paddingLeft: 20,
  },

  logoImg: {
    width: 70,
    height: 70,
    resizeMode: "contain",
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

  input: { flex: 1, padding: 8, color: "#838383ff" },
  searchIcon: { marginLeft: 5 },

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
    marginBottom: 15,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },

  logoImgRemedio: {
    width: "70%",
    height: 100,
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
    fontStyle: "italic",
  },

  buttonSee: {
    backgroundColor: "#C80000",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
});
