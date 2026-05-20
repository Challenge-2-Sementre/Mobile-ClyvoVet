import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useAppContext } from '@data/AppContext';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { styles } from '../styles/HomeScreen.styles';
import { shadows, spacing } from '@styles/spacing';

interface HomeScreenProps {
  navigation: any;
}

const preventiveTipsBySpecies: Record<string, string[]> = {
  Cachorro: [
    'Mantenha vacina antirrábica em dia.',
    'Ofereça check-up dental anual.',
    'Monitore o peso e a alimentação balanceada.',
  ],
  Gato: [
    'Fique atento a vacinas felinas completas.',
    'Estimule o pet com brinquedos e arranhadores.',
    'Verifique saúde bucal a cada 6 meses.',
  ],
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { pets } = useAppContext();

  const allVaccines = pets.flatMap(pet =>
    pet.vaccines.map(vaccine => ({
      ...vaccine,
      petName: pet.name,
      species: pet.species,
    }))
  );

  const upcomingVaccine = allVaccines
    .filter(vaccine => new Date(vaccine.dueDate) >= new Date())
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0];

  const allConsultations = pets.flatMap(pet =>
    pet.consultations.map(consultation => ({
      ...consultation,
      petName: pet.name,
      species: pet.species,
    }))
  );

  const upcomingConsultation = allConsultations
    .filter(consultation => new Date(consultation.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  const alerts = [...allVaccines, ...allConsultations].filter(item => {
    const date = new Date('dueDate' in item ? item.dueDate : item.date);
    const difference = (date.getTime() - new Date().getTime()) / (1000 * 3600 * 24);
    return difference >= 0 && difference <= 7;
  });

  const preventiveTips = pets.length
    ? preventiveTipsBySpecies[pets[0].species] || [
        'Mantenha consultas regulares.',
        'Registre cada vacina e medicamento.',
      ]
    : [];

  const nearbyVets = [
    { name: 'Clínica VetLife', distance: '1.2 km' },
    { name: 'Hospital Animal 24h', distance: '2.8 km' },
    { name: 'PetCare Clínica', distance: '3.5 km' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header title="Clyvo Vet" />
      <View style={styles.content}>
        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Acompanhe a saúde do seu pet de forma simples.</Text>
          <Text style={styles.heroSubtitle}>
            Visualize vacinas, consultas e alertas importantes em um só lugar.
          </Text>
        </View>

        <View style={styles.statsGrid}>
          <InfoCard title="Pets cadastrados" value={`${pets.length}`} />
          <InfoCard title="Vacinas próximas" value={`${allVaccines.length}`} />
        </View>

        <View style={styles.detailsRow}>
          <SmallCard title="Próxima vacina" subtitle={upcomingVaccine ? `${upcomingVaccine.name} para ${upcomingVaccine.petName}` : 'Nenhuma agendada'} />
          <SmallCard title="Próxima consulta" subtitle={upcomingConsultation ? `${upcomingConsultation.reason} em ${new Date(upcomingConsultation.date).toLocaleDateString('pt-BR')}` : 'Nenhuma agendada'} />
        </View>

        <View style={styles.alertCard}>
          <Text style={styles.alertTitle}>Alertas importantes</Text>
          <Text style={styles.alertSubtitle}>
            {alerts.length > 0
              ? `${alerts.length} compromisso(s) nos próximos 7 dias.`
              : 'Nenhum alerta urgente no momento.'}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuidados preventivos</Text>
          {preventiveTips.map((tip, index) => (
            <View key={index} style={styles.tipItem}>
              <Text style={styles.tipText}>• {tip}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Veterinários próximos</Text>
          {nearbyVets.map((vet, index) => (
            <View key={index} style={styles.vetItem}>
              <Text style={styles.vetName}>{vet.name}</Text>
              <Text style={styles.vetDistance}>{vet.distance}</Text>
            </View>
          ))}
        </View>

        <View style={styles.actions}>
          <Button title="Meus Pets" onPress={() => navigation.navigate('PetsTab')} />
          <View style={{ height: spacing.md }} />
          <Button title="Simular Vet AI" variant="secondary" onPress={() => navigation.navigate('VetAI')} />
        </View>
      </View>
    </ScrollView>
  );
};

interface InfoCardProps {
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => (
  <View style={styles.infoCard}>
    <Text style={styles.infoValue}>{value}</Text>
    <Text style={styles.infoLabel}>{title}</Text>
  </View>
);

const SmallCard: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <View style={[styles.smallCard, shadows.sm]}>
    <Text style={styles.smallCardTitle}>{title}</Text>
    <Text style={styles.smallCardSubtitle}>{subtitle}</Text>
  </View>
);

