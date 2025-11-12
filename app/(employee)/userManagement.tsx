import { getAllUsers } from "@/services/Authentication";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

export default function UsersScreen() {
  const [fontsLoaded] = useFonts({
    Michroma: require("../../assets/fonts/Michroma-Regular.ttf"),
  });

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.containerAll}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <Text style={styles.header}>USUÁRIOS</Text>
      </View>

      {/* MENU */}
      <View style={styles.circleRow}>
        <LinearGradient
          colors={["rgba(255, 255, 255, 0.7)", "transparent"]}
          style={styles.vignette}
        />

        <TouchableOpacity
          style={styles.circleAlt}
          onPress={() => router.push("/employeeIndex")}
        >
          <Text style={styles.circleText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.circle}>
          <Image
            source={require("@/assets/images/bubble.png")}
            style={styles.img}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.circleAlt}
          onPress={() => router.push("/welcome")}
        >
          <Text style={styles.circleText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* TABELA DE USUÁRIOS */}
      <View style={styles.containerTable}>
        <View style={styles.table}>
          <View style={[styles.row, styles.rowHeader]}>
            <Text style={[styles.cellProduct, styles.cellHeader]}>Nome</Text>
            <Text style={[styles.cellProduct, styles.cellHeader]}>Email</Text>
          </View>

          {loading ? (
            <Text>Carregando usuários...</Text>
          ) : users.length === 0 ? (
            <Text>Nenhum usuário cadastrado</Text>
          ) : (
            users.map((user, idx) => (
              <View key={idx} style={styles.row}>
                <Text style={styles.cellProduct}>{user.name}</Text>
                <Text style={styles.cellProduct}>{user.email}</Text>
              </View>
            ))
          )}
        </View>
      </View>

      {/* BOTÃO ADICIONAR */}
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => router.push("/addUser")}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Adicionar +</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 7,
    fontSize: 30,
    color: "#00D138",
    fontFamily: "Michroma",
    textAlign: "center",
    fontWeight: "bold",
  },

  containerButtons: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
    gap: 15,
  },

  circleRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginVertical: 5,
    backgroundColor: "#00D138",
    padding: 10,
  },

  vignette: {
    position: "absolute",
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
    alignItems: "center",
  },

  circleAlt: {
    width: 120,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  circleText: {
    marginTop: -4,
    fontSize: 16,
    fontFamily: "Michroma",
    fontWeight: "500",
    letterSpacing: 0.5,
  },

  img: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  containerTable: {
    top: 40,
    padding: 30,
  },

  table: {
    borderColor: "#847e7e77",
    borderWidth: 0.5,
    display: "flex",
    flexDirection: "column",
  },

  row: {
    flexDirection: "row",
  },

  cellProduct: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: "#f1f1f1",
  },

  buttonAdd: {
    backgroundColor: "#098902",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
  },
    rowHeader: {
      backgroundColor: '#f1f1f1',
    },

    cellHeader: {
      fontWeight: 'bold',
      textAlign: 'left',
      borderBottomWidth: 0.2,
      borderBottomColor: '#f1f1f1',
    },    
});
