import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IPet } from '@interfaces/Pet';
import { styles } from '../styles/PetCard.styles';

interface PetCardProps {
  pet: IPet;
  onPress: () => void;
}

export const PetCard: React.FC<PetCardProps> = ({ pet, onPress }) => {
  const upcomingVaccine = pet.vaccines
    .filter(v => new Date(v.dueDate) >= new Date())
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0];

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{pet.name}</Text>
          <Text style={styles.subtitle}>{`${pet.species} • ${pet.breed}`}</Text>
          <Text style={styles.tutor}>{`Tutor: ${pet.tutor}`}</Text>
          {upcomingVaccine ? (
            <Text style={styles.extra}>{`Vacina próxima: ${new Date(
              upcomingVaccine.dueDate
            ).toLocaleDateString('pt-BR')}`}</Text>
          ) : (
            <Text style={styles.extra}>Nenhuma vacina agendada</Text>
          )}
        </View>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Ver detalhes</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

