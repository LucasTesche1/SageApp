import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddressEdit({ navigation }: { navigation?: any }) {
  const [street, setStreet] = useState('Rua das dores');
  const [neighborhood, setNeighborhood] = useState('Bairro rio preto');
  const [number, setNumber] = useState('523');
  const [uf, setUf] = useState('PA');
  const [city, setCity] = useState('Olindas');
  const [cep, setCep] = useState('78895-000');

  function handleSave() {
    Alert.alert('Salvo', 'Endereço salvo (substitua por chamada API).');
    router.push('/account');
    console.log({ street, neighborhood, number, uf, city, cep });
  }

  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Edite seu endereço</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.avatarCircle}>
          {/* Ícone de localização */}
          <Ionicons name="location-sharp" size={100} color="#7f7f7f" />
        </View>

        <Text style={styles.label}>Rua</Text>
        <TextInput style={styles.input} value={street} onChangeText={setStreet} />

        <Text style={styles.label}>Bairro</Text>
        <TextInput style={styles.input} value={neighborhood} onChangeText={setNeighborhood} />

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flex:0.55}}>
            <Text style={styles.label}>Número</Text>
            <TextInput style={styles.input} value={number} onChangeText={setNumber} />
          </View>
          <View style={{flex:0.42}}>
            <Text style={styles.label}>UF</Text>
            <TextInput style={styles.input} value={uf} onChangeText={setUf} />
          </View>
        </View>

        <Text style={styles.label}>Cidade</Text>
        <TextInput style={styles.input} value={city} onChangeText={setCity} />

        <Text style={styles.label}>CEP</Text>
        <TextInput style={styles.input} value={cep} onChangeText={setCep} />

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { top:10,marginBottom:10,height:72, backgroundColor:'#15d9d2', justifyContent:'center', alignItems:'center', paddingTop:6 },
  headerTitle: { color:'#fff', fontSize:20, fontWeight:'600' },

  container: { padding:20, paddingBottom:120 },

  avatarCircle: {
    width:120, height:120, borderRadius:60, borderWidth:1.6, borderColor:'#19d5cf',
    justifyContent:'center', alignItems:'center', alignSelf:'center', marginBottom:18, backgroundColor:'#fff'
  },

  label: { marginTop:10, marginBottom:6, color:'#222', fontWeight:'600' },
  input: { height:44, borderRadius:8, borderWidth:1, borderColor:'#eee', paddingHorizontal:12, backgroundColor:'#fff' },

  saveBtn: {
    marginTop:20, alignSelf:'center',
    backgroundColor:'#2fe3dd', paddingVertical:12, paddingHorizontal:28,
    borderRadius:8, minWidth:200, alignItems:'center'
  },
  saveBtnText: { color:'#fff', fontWeight:'600' },
});
