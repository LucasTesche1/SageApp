import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileEdit({ navigation }: { navigation?: any }) {
  const [name, setName] = useState('Keven Peter');
  const [email, setEmail] = useState('Kevenpeters@gmail.com');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('23/05/1995');
  const [phone, setPhone] = useState('(61) 90000-0000');

  function handleSave() {
    Alert.alert('Salvo', 'Dados salvos localmente (substitua por chamada API).');
    router.push('/account');
    console.log({ name, email, password, dob, phone });
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
 
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Edite seu perfil</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.avatarWrap}>
          <View style={styles.avatarBorder}>
            <Image
              source={require('@/assets/profile/perfil2.png')}
              style={styles.avatarImage}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.cameraButton} activeOpacity={0.7}>
              <Ionicons name="camera-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text style={styles.label}>Email</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput style={styles.input} value={dob} onChangeText={setDob} />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />

          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveBtnText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    top:10,
    height: 72,
    backgroundColor: '#15d9d2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 6,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '600' },

  container: { padding: 20, paddingBottom: 120 },

  avatarWrap: { alignItems: 'center', marginTop: 18, marginBottom: 10 },
  avatarBorder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#15d9d2',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#9aa0b5',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: '#15d9d2',
    borderRadius: 16,
    padding: 6,
  },

  form: { marginTop: 6 },

  label: { marginTop: 10, marginBottom: 6, color: '#222', fontWeight: '600' },
  input: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },

  saveBtn: {
    marginTop: 18,
    alignSelf: 'center',
    backgroundColor: '#2fe3dd',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  saveBtnText: { color: '#fff', fontWeight: '600' },
});
