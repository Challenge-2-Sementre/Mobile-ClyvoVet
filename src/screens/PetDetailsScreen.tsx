import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useAppContext } from '@data/AppContext';
import { Header } from '@components/Header';
import { styles } from '../styles/PetDetailsScreen.styles';

interface PetDetailsScreenProps {
  navigation: any;
  route: any;
}

export const PetDetailsScreen: React.FC<PetDetailsScreenProps> = ({ navigation, route }) => {
  const { petId } = route.params;
  const { getPetById } = useAppContext();
  const pet = getPetById(petId);

  if (!pet) {
    return (
      <View style={styles.container}>
        <Header title="Detalhes do Pet" showBackButton onBackPress={() => navigation.goBack()} />
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Pet não encontrado.</Text>
          <Text style={styles.emptyDescription}>Verifique a lista de pets e tente novamente.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Detalhes do Pet" showBackButton onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <Text style={styles.petName}>{pet.name}</Text>
          <Text style={styles.petMeta}>{`${pet.species} • ${pet.breed}`}</Text>
          <Text style={styles.petMeta}>{`Idade: ${pet.age} • Peso: ${pet.weight}`}</Text>
          <Text style={styles.petMeta}>{`Tutor: ${pet.tutor}`}</Text>
        </View>

        <Section title="Histórico Médico" items={pet.history} />
        <Section
          title="Vacinas"
          items={pet.vaccines.map(v => `${v.name} • ${new Date(v.dueDate).toLocaleDateString('pt-BR')} • ${v.status}`)}
        />
        <Section
          title="Medicamentos"
          items={pet.medications.map(m => `${m.name} • ${m.dosage} • ${m.frequency}`)}
        />
        <Section title="Problemas de Saúde" items={pet.healthIssues.length ? pet.healthIssues : ['Nenhum problema registrado']} />
        <Section
          title="Consultas"
          items={pet.consultations.map(c => `${new Date(c.date).toLocaleDateString('pt-BR')} • ${c.reason} • ${c.veterinarian}`)}
        />
      </ScrollView>
    </View>
  );
};

interface SectionProps {
  title: string;
  items: string[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {items.map((item, index) => (
      <View key={`${title}-${index}`} style={styles.sectionItem}>
        <Text style={styles.sectionText}>{item}</Text>
      </View>
    ))}
  </View>
);

