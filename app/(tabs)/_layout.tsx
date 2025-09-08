import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import FloatingButton from '@/components/FloatingButton';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';


export default function TabLayout() {


  return (
    <><Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00CED1',
        tabBarInactiveTintColor: '#92929281',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarStyle: [
          styles.tabBar,
          Platform.OS === 'ios' && styles.iosPadding,
          { backgroundColor: '#fff' }
        ],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={40} name="house.fill" color={color} style={{ marginTop: 20 }} />,
        }} />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <IconSymbol size={40} name="person.fill" color={color} style={{ marginTop: 20 }} />,
        }} />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <IconSymbol size={40} name="cart.fill" color={color} style={{ marginTop: 20 }} />,
        }} />

    </Tabs><FloatingButton /></>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 10,
    elevation: 5,
    backgroundColor: "#1e1e1e",
    borderRadius: 30,
    height: 60,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
  },
  iosPadding: {
    paddingBottom: 20,
  },
});