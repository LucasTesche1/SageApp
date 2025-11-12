import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";

export default function FavoritosScreen() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    async function loadFavorites() {
      const stored = await AsyncStorage.getItem("favorites");
      if (stored) setFavorites(JSON.parse(stored));
    }

    loadFavorites();
  }, []);

  return (
    <ScrollView style={styles.container}>
    <Stack.Screen options={{ headerShown: false }} />  
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="#00CED1" />
        </TouchableOpacity>
        <Text style={styles.title}>Favoritos</Text>
      </View>

      {favorites.length === 0 ? (
        <Text style={{ marginTop: 20, fontSize: 16 }}>Nenhum item favoritado ainda.</Text>
      ) : (
        favorites.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.nome}>{item.name}</Text>
            <Text style={styles.mg}>{item.dosage}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 10,
  },

  title: { fontSize: 26, fontFamily:'Arial', justifyContent:'center', textAlign:'center'},

  card: {
    backgroundColor: "#F3F3F3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  nome: { fontSize: 18, fontWeight: "500" },
  mg: { fontSize: 15, color: "#555" },
});
