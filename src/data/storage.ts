import AsyncStorage from '@react-native-async-storage/async-storage';
import { IPet, IAppSettings, ITutorProfile } from '@interfaces/Pet';

const PETS_KEY = '@clyvo_vet_pets';
const SETTINGS_KEY = '@clyvo_vet_settings';
const TUTOR_KEY = '@clyvo_vet_tutor';

export const storageService = {
  savePets: async (pets: IPet[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(PETS_KEY, JSON.stringify(pets));
    } catch (error) {
      console.error('Error saving pets:', error);
      throw error;
    }
  },

  getPets: async (): Promise<IPet[]> => {
    try {
      const data = await AsyncStorage.getItem(PETS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting pets:', error);
      return [];
    }
  },

  hasPetsData: async (): Promise<boolean> => {
    try {
      const data = await AsyncStorage.getItem(PETS_KEY);
      return data !== null;
    } catch (error) {
      console.error('Error checking pets data:', error);
      return false;
    }
  },

  addPet: async (pet: IPet): Promise<void> => {
    try {
      const pets = await storageService.getPets();
      pets.push(pet);
      await storageService.savePets(pets);
    } catch (error) {
      console.error('Error adding pet:', error);
      throw error;
    }
  },

  updatePet: async (updatedPet: IPet): Promise<void> => {
    try {
      const pets = await storageService.getPets();
      const index = pets.findIndex(p => p.id === updatedPet.id);
      if (index !== -1) {
        pets[index] = updatedPet;
        await storageService.savePets(pets);
      }
    } catch (error) {
      console.error('Error updating pet:', error);
      throw error;
    }
  },

  deletePet: async (petId: string): Promise<void> => {
    try {
      const pets = await storageService.getPets();
      const filtered = pets.filter(p => p.id !== petId);
      await storageService.savePets(filtered);
    } catch (error) {
      console.error('Error deleting pet:', error);
      throw error;
    }
  },

  clearAllPets: async (): Promise<void> => {
    try {
      await storageService.savePets([]);
    } catch (error) {
      console.error('Error clearing pets:', error);
      throw error;
    }
  },

  saveSettings: async (settings: IAppSettings): Promise<void> => {
    try {
      await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
      throw error;
    }
  },

  getSettings: async (): Promise<IAppSettings> => {
    try {
      const data = await AsyncStorage.getItem(SETTINGS_KEY);
      return data
        ? JSON.parse(data)
        : {
            theme: 'light',
            notificationsEnabled: true,
            language: 'pt-BR',
          };
    } catch (error) {
      console.error('Error getting settings:', error);
      return {
        theme: 'light',
        notificationsEnabled: true,
        language: 'pt-BR',
      };
    }
  },

  saveTutorProfile: async (profile: ITutorProfile): Promise<void> => {
    try {
      await AsyncStorage.setItem(TUTOR_KEY, JSON.stringify(profile));
    } catch (error) {
      console.error('Error saving tutor profile:', error);
      throw error;
    }
  },

  getTutorProfile: async (): Promise<ITutorProfile> => {
    try {
      const data = await AsyncStorage.getItem(TUTOR_KEY);
      return data
        ? JSON.parse(data)
        : {
            name: 'Tutor Anônimo',
            email: 'seuemail@exemplo.com',
            phone: '+55 11 90000-0000',
            relation: 'Responsável',
          };
    } catch (error) {
      console.error('Error getting tutor profile:', error);
      return {
        name: 'Tutor Anônimo',
        email: 'seuemail@exemplo.com',
        phone: '+55 11 90000-0000',
        relation: 'Responsável',
      };
    }
  },
};
