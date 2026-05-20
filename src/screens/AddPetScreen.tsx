import React, { useState } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { useAppContext } from '@data/AppContext';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { styles } from '../styles/AddPetScreen.styles';
import { spacing } from '@styles/spacing';

interface AddPetScreenProps {
  navigation: any;
}

export const AddPetScreen: React.FC<AddPetScreenProps> = ({ navigation }) => {
  const { addPet } = useAppContext();
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [specialNeeds, setSpecialNeeds] = useState('');
  const [tutor, setTutor] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!name.trim()) {
      nextErrors.name = 'Nome do pet é obrigatório';
    }
    if (!species.trim()) {
      nextErrors.species = 'Espécie é obrigatória';
    }
    if (!breed.trim()) {
      nextErrors.breed = 'Raça é obrigatória';
    }
    if (!age.trim()) {
      nextErrors.age = 'Idade estimada é obrigatória';
    }
    if (!weight.trim()) {
      nextErrors.weight = 'Peso é obrigatório';
    }
    if (!tutor.trim()) {
      nextErrors.tutor = 'Tutor responsável é obrigatório';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) {
      return;
    }

    try {
      await addPet({
        name: name.trim(),
        species: species.trim(),
        breed: breed.trim(),
        age: age.trim(),
        weight: weight.trim(),
        specialNeeds: specialNeeds.trim() || 'Nenhuma',
        tutor: tutor.trim(),
      });

      Alert.alert('Pet cadastrado', 'O pet foi adicionado com sucesso.', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o pet. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Cadastrar Pet" showBackButton onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <Input label="Nome" placeholder="Nome do pet" value={name} onChangeText={setName} error={errors.name} />
        <Input label="Espécie" placeholder="Cachorro, Gato, etc." value={species} onChangeText={setSpecies} error={errors.species} />
        <Input label="Raça" placeholder="Raça do pet" value={breed} onChangeText={setBreed} error={errors.breed} />
        <Input label="Idade estimada" placeholder="Ex: 3 anos" value={age} onChangeText={setAge} error={errors.age} />
        <Input label="Peso" placeholder="Ex: 12 kg" value={weight} onChangeText={setWeight} error={errors.weight} />
        <Input label="Necessidades especiais" placeholder="Ex: Alergia alimentar" value={specialNeeds} onChangeText={setSpecialNeeds} />
        <Input label="Tutor responsável" placeholder="Nome do tutor" value={tutor} onChangeText={setTutor} error={errors.tutor} />

        <View style={styles.buttons}>
          <Button title="Salvar Pet" onPress={handleSave} size="large" />
          <View style={{ height: spacing.md }} />
          <Button title="Cancelar" variant="outline" onPress={() => navigation.goBack()} size="large" />
        </View>
      </ScrollView>
    </View>
  );
};

