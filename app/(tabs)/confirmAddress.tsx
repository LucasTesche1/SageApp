import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ConfirmAddressScreen() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.strip}>
        <Text style={styles.headerText}>Entrega</Text>
      </View>

      <Text style={styles.title}>Confirme o endereço</Text>

      <TouchableOpacity
        style={[styles.addressBox, selected && styles.selectedBox]}
        onPress={() => setSelected(true)}
      >
        <View style={styles.row}>
          <View style={[styles.radio, selected && styles.radioSelected]} />
          <Text style={styles.addressText}>Rua João Medeiros, NUM 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.newAddress}>
        <Text style={styles.newAddressText}>
          Adicionar novo endereço{" "}
          <Text style={{ color: "#00C2CB", fontWeight: "bold" }}>+</Text>
        </Text>
      </TouchableOpacity>
    
      <View style={{display:'flex', marginTop:400}}>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push('/payment')}
      >
        <Text style={styles.continueText} >Continuar</Text>
      </TouchableOpacity>
            <TouchableOpacity
        style={styles.previousButton}
        onPress={() => router.push("/cart")}
      >
        <Text style={styles.continueText}>Voltar</Text>
      </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", alignItems: "center" },
  strip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00C2CB",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 10,
    top:10,

  },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "600", textAlign:'center' },
  title: {
    fontSize: 16,
    marginTop: 30,
    marginBottom:10,
    color: "#333",
    fontWeight: "600",
  },
  addressBox: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedBox: { borderColor: "#00C2CB", borderWidth: 1.5 },
  row: { flexDirection: "row", alignItems: "center" },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: "#777",
    marginRight: 10,
  },
  radioSelected: { backgroundColor: "#00C2CB", borderColor: "#00C2CB" },
  addressText: { color: "#333" },
  newAddress: {
    backgroundColor: "#E5E5E5",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 90,
    marginTop: 10,
  },
  newAddressText: { color: "#444" },
  continueButton: {
    backgroundColor: "#00C2CB",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 25,
  },
  previousButton:{
    backgroundColor: "#c5c5c5ff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 25,
    textAlign:'center',
    justifyContent:"center",
    alignItems:"center"
  
  },
  continueText: { color: "#fff", fontWeight: "600", fontSize: 16, },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 25,
    position: "absolute",
    bottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },

});
