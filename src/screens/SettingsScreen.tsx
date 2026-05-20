import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Switch, Alert } from 'react-native';
import { storageService } from '@data/storage';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { styles } from '../styles/SettingsScreen.styles';
import { colors } from '@styles/colors';
import { spacing } from '@styles/spacing';
import { IAppSettings, ITutorProfile } from '@interfaces/Pet';

export const SettingsScreen: React.FC = () => {
  const [settings, setSettings] = useState<IAppSettings>({
    theme: 'light',
    notificationsEnabled: true,
    language: 'pt-BR',
  });
  const [profile, setProfile] = useState<ITutorProfile>({
    name: '',
    email: '',
    phone: '',
    relation: '',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [loadedSettings, loadedProfile] = await Promise.all([
        storageService.getSettings(),
        storageService.getTutorProfile(),
      ]);
      setSettings(loadedSettings);
      setProfile(loadedProfile);
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const handleSettingChange = async (key: keyof IAppSettings, value: any) => {
    const updatedSettings = { ...settings, [key]: value };
    setSettings(updatedSettings);

    try {
      await storageService.saveSettings(updatedSettings);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar configurações');
    }
  };

  const handleProfileSave = async () => {
    if (!profile.name.trim() || !profile.email.trim() || !profile.phone.trim()) {
      Alert.alert('Preencha o perfil', 'Nome, email e telefone são obrigatórios.');
      return;
    }

    try {
      await storageService.saveTutorProfile(profile);
      Alert.alert('Perfil salvo', 'As informações do tutor foram atualizadas.');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o perfil.');
    }
  };

  const handleClearAllData = () => {
    Alert.alert(
      'Limpar todos os dados',
      'Deseja remover todos os registros de pets? Essa ação não pode ser desfeita.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: async () => {
            try {
              await storageService.clearAllPets();
              Alert.alert('Dados limpos', 'Todos os pets foram removidos.');
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível limpar os dados.');
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Configurações" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfil do Tutor</Text>
          <Input
            label="Nome"
            value={profile.name}
            onChangeText={value => setProfile(prev => ({ ...prev, name: value }))}
            placeholder="Nome do tutor"
          />
          <Input
            label="Email"
            value={profile.email}
            onChangeText={value => setProfile(prev => ({ ...prev, email: value }))}
            placeholder="email@exemplo.com"
            keyboardType="email-address"
          />
          <Input
            label="Telefone"
            value={profile.phone}
            onChangeText={value => setProfile(prev => ({ ...prev, phone: value }))}
            placeholder="(11) 90000-0000"
            keyboardType="phone-pad"
          />
          <Input
            label="Relação"
            value={profile.relation}
            onChangeText={value => setProfile(prev => ({ ...prev, relation: value }))}
            placeholder="Ex: Pai, Mãe, Tutor"
          />
          <View style={styles.buttonGroup}>
            <Button title="Salvar perfil" onPress={handleProfileSave} size="large" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Configurações do app</Text>
          <View style={styles.settingItem}>
            <View>
              <Text style={styles.settingLabel}>Notificações</Text>
              <Text style={styles.settingDescription}>Receber lembretes de vacinas e consultas.</Text>
            </View>
            <Switch
              value={settings.notificationsEnabled}
              onValueChange={value => handleSettingChange('notificationsEnabled', value)}
              trackColor={{ false: colors.grayLight, true: colors.primary }}
              thumbColor={colors.white}
            />
          </View>
          <View style={styles.settingItem}>
            <View>
              <Text style={styles.settingLabel}>Idioma</Text>
              <Text style={styles.settingDescription}>
                {settings.language === 'pt-BR' ? 'Português (Brasil)' : 'English'}
              </Text>
            </View>
            <Button
              title={settings.language === 'pt-BR' ? 'Mudar para EN' : 'Mudar para PT'}
              variant="outline"
              onPress={() => handleSettingChange('language', settings.language === 'pt-BR' ? 'en-US' : 'pt-BR')}
            />
          </View>
          <View style={styles.settingItem}>
            <View>
              <Text style={styles.settingLabel}>Tema</Text>
              <Text style={styles.settingDescription}>{settings.theme === 'light' ? 'Claro' : 'Escuro'}</Text>
            </View>
            <Button
              title={settings.theme === 'light' ? 'Modo escuro' : 'Modo claro'}
              variant="outline"
              onPress={() => handleSettingChange('theme', settings.theme === 'light' ? 'dark' : 'light')}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.appName}>Clyvo Vet</Text>
            <Text style={styles.version}>Versão 1.0.0</Text>
            <Text style={styles.description}>
              Aplicativo para organizar a saúde de pets, vacinas, medicamentos e consultas com persistência local.
            </Text>
            <Text style={styles.featureItem}>✓ Cadastro de pets e histórico médico</Text>
            <Text style={styles.featureItem}>✓ Agenda de vacinas e consultas</Text>
            <Text style={styles.featureItem}>✓ Simulação de IA veterinária</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ações</Text>
          <Button title="Limpar todos os dados de pets" variant="danger" size="large" onPress={handleClearAllData} />
        </View>

        <View style={{ height: spacing.xxxl }} />
      </ScrollView>
    </View>
  );
};

