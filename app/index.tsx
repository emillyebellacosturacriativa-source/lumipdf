import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';

export default function LibraryScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', padding: 16, paddingTop: 48 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>
        LumiPDF — Estúdio
      </Text>
      
      {/* Barra de Busca */}
      <TextInput
        style={{ backgroundColor: '#1e293b', color: 'white', padding: 12, borderRadius: 12, marginBottom: 16 }}
        placeholder="Buscar documentos..."
        placeholderTextColor="#94a3b8"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Lista Vazia */}
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
          <Text style={{ color: '#94a3b8', textAlign: 'center' }}>
            Nenhum documento recente. O seu estúdio está pronto!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
      }
