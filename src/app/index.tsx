import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Intentando ingresar con el correo: ${email}`);
    // Aquí conectaremos con Python más adelante
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.brandTitle}>Mi Tienda</Text>
      <Text style={styles.subTitle}>Inicia sesión para continuar</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="ejemplo@correo.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#f8f9fa' },
  brandTitle: { fontSize: 32, fontWeight: 'bold', color: '#2b2d42', marginBottom: 6 },
  subTitle: { fontSize: 16, color: '#8d99ae', marginBottom: 32 },
  form: { width: '100%', maxWidth: 360, backgroundColor: '#fff', padding: 24, borderRadius: 12, borderWidth: 1, borderColor: '#e9ecef' },
  label: { fontSize: 14, fontWeight: '600', color: '#2b2d42', marginBottom: 6 },
  input: { height: 48, borderColor: '#ced4da', borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, marginBottom: 16, backgroundColor: '#f8f9fa' },
  button: { height: 50, backgroundColor: '#d90429', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  secondaryButton: { marginTop: 16, alignItems: 'center' },
  secondaryText: { color: '#2b2d42', fontSize: 14, fontWeight: '500' }
});