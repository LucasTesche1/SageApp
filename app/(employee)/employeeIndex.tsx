import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Navigation() {

  const [fontsLoaded] = useFonts({
    Michroma: require("../../assets/fonts/Michroma-Regular.ttf"),
  });

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
        onPress={() => router.push('/medicine')}
    
    >
    <Text style={styles.circleText}>Início</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.circle}   
        onPress={() => router.push('/medicine')}
    
    >
    <Image
        source={require('@/assets/images/bubble.png')}
        style={styles.img}
        /> 
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.circleAlt}   
        onPress={() => router.push('/medicine')}
    
    >
    <Text style={styles.circleText}>Conta</Text>
    </TouchableOpacity>

    </View>

    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} onPress={() => router.push('/employeeIndex')}>            
        <Text style={styles.cardText}>Formulários</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('/employeeIndex')}>            
        <Text style={styles.cardText}>Listas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('/employeeIndex')}>            
        <Text style={styles.cardText}>Modal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('/employeeIndex')}>            
        <Text style={styles.cardText}>Imagens</Text>
      </TouchableOpacity>

    </View>

  </ScrollView>
);

}

const styles = StyleSheet.create({

  containerAll:{
    flex: 1, 
    backgroundColor: "#fff"
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
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", 
    gap: 15,
    top:70
  },
  card: {
    width: 150,
    height: 200,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d2d2d2",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#606c38",

  },
  cardStatus:{
    width: 150,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d2d2d2",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#283618",

  },
  cardText: {
    width:100,
    textAlign:'center',
    fontSize: 16,
    fontWeight: "bold",
    color:'#fff'
  },
    buttonsContainer: {
    padding: 10,
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
});