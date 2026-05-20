import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { getVetSuggestions } from '@services/vetAI';
import { styles } from '../styles/VetAIScreen.styles';

export const VetAIScreen: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [responses, setResponses] = useState<any[]>([]);
  const [ageEstimate, setAgeEstimate] = useState('');

  const estimateAge = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('filhote') || lower.includes('bebê')) {
      return 'Estimativa de idade: 4-12 meses';
    }
    if (lower.includes('adulto') || lower.includes('adultos')) {
      return 'Estimativa de idade: 2-6 anos';
    }
    if (lower.includes('idoso') || lower.includes('velho')) {
      return 'Estimativa de idade: 8+ anos';
    }
    return 'Estimativa de idade: informações insuficientes';
  };

  const handleAsk = () => {
    if (!symptoms.trim()) {
      Alert.alert('Digite os sintomas', 'Descreva o que o seu pet está sentindo.');
      return;
    }

    setResponses(getVetSuggestions(symptoms));
    setAgeEstimate(estimateAge(symptoms));
  };

  return (
    <View style={styles.container}>
      <Header title="Vet AI" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <Text style={styles.description}>
          Use o assistente para receber sugestões iniciais de cuidados. Esta simulação não substitui a avaliação de um veterinário.
        </Text>

        <Input
          label="Sintomas do pet"
          placeholder="Ex: tosse, falta de apetite, letargia"
          value={symptoms}
          onChangeText={setSymptoms}
          multiline
          numberOfLines={4}
        />

        <Button title="Gerar Sugestões" onPress={handleAsk} size="large" />

        <View style={styles.estimateCard}>
          <Text style={styles.estimateTitle}>Simulação de idade</Text>
          <Text style={styles.estimateText}>{ageEstimate}</Text>
        </View>

        {responses.length > 0 && (
          <View style={styles.responsesWrapper}>
            {responses.map(response => (
              <View key={response.id} style={styles.responseCard}>
                <Text style={styles.responseTitle}>{response.title}</Text>
                {response.details.map((detail: string, index: number) => (
                  <Text key={index} style={styles.responseText}>• {detail}</Text>
                ))}
              </View>
            ))}
          </View>
        )}

        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>Atenção</Text>
          <Text style={styles.warningText}>
            Este assistente é apenas uma sugestão inicial. Procure um veterinário sempre que o seu pet apresentar alterações no comportamento ou saúde.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

