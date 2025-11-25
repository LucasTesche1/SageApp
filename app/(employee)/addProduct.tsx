import ItensForm from "@/components/ItensForm";
import { addItem } from "@/services/Itens";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Navigation() {
    const [fontsLoaded] = useFonts({
    Michroma: require("../../assets/fonts/Michroma-Regular.ttf"),
    });

    async function handleRegisterItem(name:string, quantity:string, dosage:string) {
      try{
        const response = await addItem({name, quantity, dosage});
        console.log("Item criado: ", response);
        router.push("/stock");
      }catch(error){
        console.error("Erro no registro: ",error);
        Alert.alert("Erro", "Nome, Quantidade ou Dosagem inválidos");
      }


    };

 return (
  
  <ScrollView contentContainerStyle={styles.containerAll}>
    <Stack.Screen options={{ headerShown: false }} />  

    <View style={styles.header}>
        <Text style={styles.header}>SAGE EST</Text>
    </View>

    <View style={styles.circleRow}>
    <LinearGradient
    colors={['rgba(255, 255, 255, 0.7)', 'transparent']} 
    style={styles.vignette}
    />

    <TouchableOpacity
        style={styles.circleAlt}   
        onPress={() => router.push('/employeeIndex')}
    
    >
    <Text style={styles.circleText}>Início</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.circle}   
    >
    <Image
        source={require('@/assets/images/bubble.png')}
        style={styles.img}
        /> 
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.circleAlt}   
        onPress={() => router.push('/welcome')}
    
    >
    <Text style={styles.circleText}>Login</Text>
    </TouchableOpacity>
        
    </View>

    <ItensForm onSubmit={handleRegisterItem}/>

    <View style={styles.returnContainer}>
      <TouchableOpacity
      onPress={() => router.push('/stock')}
      >
      <Image
      source={require("@/assets/images/return.png")}/></TouchableOpacity>
    </View>

  </ScrollView>
);

}

const styles = StyleSheet.create({

  containerAll:{
    flex: 1, 
    backgroundColor: "#fff"
  },  

    formContainer: {
    padding: 20,
    gap: 15,
    alignItems: 'center',
    },


    input: {
      width: "80%",
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 12,
      borderRadius: 10,
    },


    containerButtons: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      paddingVertical: 20,
      gap: 15,
    },

    returnContainer:{  
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      top:300
      },

  header:{
    display:'flex',
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 7,
    fontSize:40,

    color: "#00D138",
    fontFamily: "Michroma",
    textAlign:'center',
    fontWeight:'bold'
    

  },

  container: {
    flexGrow: 1,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff",
    paddingVertical: 20,
  },


  textStyle: {
    textAlign: 'center',
    marginBottom: 8,

  },

  circleRow:{
    flexDirection: "row",
    justifyContent: "center",
    gap:20,
    marginVertical: 5,
    backgroundColor: "#00D138",
    padding: 10,
  },

  vignette: {
    position: 'absolute',
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
    alignItems : 'center'
  },

  circleAlt:{
    width: 120,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    alignItems : 'center',
    justifyContent : 'center',

  },

  circleText:{
    marginTop:-4,
    fontSize:16,
    fontFamily:'Michroma',
    fontWeight:'500',
    letterSpacing:0.5


  },

  img:{        
    width : 60,
    height :60,
    resizeMode : 'contain',
  },

  containerTable:{
    top:40,
    padding:30,
  },
  table: {
    borderColor:'#847e7e77',
    borderWidth:0.5,
    display:'flex',
    flexDirection:'column'
  },

  row: {
    flexDirection: "row",
  },

    cellId: {
        flex: 0.3,
        padding: 12,
        borderWidth: 1,
        borderColor: "#f1f1f1",
        textAlign: "center",
    
    },

    cellProduct: {
        flex: 1, 
        padding: 12,
        borderWidth: 1,
        borderColor: "#f1f1f1",
    },


});