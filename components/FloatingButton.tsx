// components/FloatingButton.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function FloatingButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/sageAi')}
      >
        <Image
          source={require('@/constants/images/sageult.png')}
          style={styles.icon}
        />
       
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 350,
    right : 1,
    alignSelf: 'auto',
    zIndex: 10, 
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {    
    top : 3,
    width : 50,
    height : 50,
    resizeMode : 'contain',
  }
});
