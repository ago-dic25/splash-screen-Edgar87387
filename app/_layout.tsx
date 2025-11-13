import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
        source={require('../assets/images/splash.png')}
        style={styles.splash}
        resizeMode="contain"
      >
        <Text style={styles.title}>Bienvenido a App_Entrada</Text>
      </ImageBackground>
    );
  }

  return <Slot />;
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
