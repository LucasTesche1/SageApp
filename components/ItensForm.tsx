import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface ItemFromProps {
  onSubmit:(name: string, quantity: string, dosage: string) => void;
}


export default function ItensForm({onSubmit}: ItemFromProps){

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [dosage, setDosage] = useState("");

  return (
        <View style={styles.container}>
            
            <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome do produto</Text>
              <TextInput 
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Gaze"
                  autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.label}>Quantidade</Text>
            <TextInput
                style={styles.input}
                value={quantity}
                onChangeText={setQuantity}
                placeholder="3"            
            />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.label}>Dosagem (se houver)</Text>            
            <TextInput
                style={styles.input}
                value={dosage}
                onChangeText={setDosage}
                placeholder="20mg"
            />
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity
                style={styles.btnAdd}
                onPress={() => onSubmit(name, quantity, dosage)}
                ><Text style={{color:'#fff', fontSize:18}}>Adicionar +</Text></TouchableOpacity>
            </View> 
      </View>

  );
}

const styles = StyleSheet.create({

  container: {
    top:50,
    alignItems:'center',
    backgroundColor: "#fff",
    justifyContent:'space-evenly'
  },

  inputContainer:{

  },

  label:{
    fontWeight:'bold',
    bottom:5
  },

  
  input:{
    width: 350,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 10,
 },

  defaultText:{
  fontSize: 20,
  color: "#00CED1",
  fontFamily: "Arial",
  textAlign:'center',
  bottom:20,
  textDecorationLine: 'underline',
  
  },

  btnAdd:{

    backgroundColor:'#098902',
    paddingHorizontal:30,
    paddingVertical:12,
    borderRadius:20,
    width:180,
    justifyContent:'center',
    alignItems:'center',


  },

  
  containerButtons:{
    flex: 1, 
    top:100,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: "#fff" ,
    gap:10
  },
});

