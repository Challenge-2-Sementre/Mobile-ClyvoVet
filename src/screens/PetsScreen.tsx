import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useAppContext } from '@data/AppContext';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { PetCard } from '@components/PetCard';
import { styles } from '../styles/PetsScreen.styles';

interface PetsScreenProps {
  navigation: any;
}

export const PetsScreen: React.FC<PetsScreenProps> = ({ navigation }) => {
  const { pets } = useAppContext();

  const renderEmpty = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyTitle}>Nenhum pet cadastrado ainda</Text>
      <Text style={styles.emptySubtitle}>
        Comece adicionando o primeiro pet para acompanhar vacinas e consultas.
      </Text>
      <Button
        title="Cadastrar Pet"
        onPress={() => navigation.navigate('AddPet')}
        style={styles.addButton}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Meus Pets" />

      <FlatList
        data={pets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PetCard
            pet={item}
            onPress={() => navigation.navigate('PetDetails', { petId: item.id })}
          />
        )}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={pets.length === 0 ? styles.emptyContainer : undefined}
      />

      {pets.length > 0 && (
        <View style={styles.footerButton}>
          <Button title="Adicionar Pet" onPress={() => navigation.navigate('AddPet')} />
        </View>
      )}
    </View>
  );
};

