import RegisterForm from '@/components/RegisterForm';
import { register } from '@/services/Authentication';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function ProfileEdit() {

    async function handleRegister(name:string, email:string, password:string) {
      try{
        const response = await register({name, email, password});
        console.log("Usuário inserido: ", response);
        router.push("/userManagement");
      }catch(error){
        console.error("Erro no registro: ",error);
        Alert.alert("Erro", "Nome, email ou senha inválidos");
      }
      
    }
    const [fontsLoaded] = useFonts({
        Michroma: require("../../assets/fonts/Michroma-Regular.ttf"),
        
    });



  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
     <Stack.Screen options={{ headerShown: false }} />  
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Adicione um perfil</Text>
      </View>



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

        <RegisterForm onSubmit={handleRegister}/>

        <View style={styles.returnContainer}>
            <TouchableOpacity
              onPress={() => router.push('/userManagement')}
            >
            <Image
            source={require("@/assets/images/return.png")}/>
            </TouchableOpacity>
        </View>
    </View>


  );
}

const styles = StyleSheet.create({
  header: {
    top:10,
    height: 72,
    backgroundColor: '#00D138',
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
    borderColor: '#00D138',
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
    backgroundColor: '#00D138',
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
    marginTop: 50,
    alignSelf: 'center',    
    minWidth: 200,
    backgroundColor:'#098902',
    paddingHorizontal:30,
    paddingVertical:12,
    borderRadius:20,
    width:180,
    justifyContent:'center',
    alignItems:'center',
  },
  saveBtnText: { color: '#fff', fontWeight: '600' },

    returnContainer:{  
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    top:200
    },

});
