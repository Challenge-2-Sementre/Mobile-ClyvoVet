import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { IPet } from '@interfaces/Pet';
import { storageService } from '@data/storage';
import { samplePets } from '@data/sampleData';
import { v4 as uuidv4 } from 'uuid';

interface AppContextType {
  pets: IPet[];
  loading: boolean;
  error: string | null;
  addPet: (petData: Omit<IPet, 'id' | 'createdAt' | 'updatedAt' | 'history' | 'vaccines' | 'medications' | 'healthIssues' | 'consultations'>) => Promise<void>;
  updatePet: (pet: IPet) => Promise<void>;
  deletePet: (petId: string) => Promise<void>;
  clearAllPets: () => Promise<void>;
  loadPets: () => Promise<void>;
  getPetById: (petId: string) => IPet | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pets, setPets] = useState<IPet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPets = async () => {
    try {
      setLoading(true);
      const [savedPets, hasPetsData] = await Promise.all([
        storageService.getPets(),
        storageService.hasPetsData(),
      ]);
      if (savedPets.length === 0 && !hasPetsData) {
        await storageService.savePets(samplePets);
        setPets(samplePets);
      } else {
        setPets(savedPets);
      }
      setError(null);
    } catch (err) {
      setError('Erro ao carregar pets');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addPet = async (
    petData: Omit<IPet, 'id' | 'createdAt' | 'updatedAt' | 'history' | 'vaccines' | 'medications' | 'healthIssues' | 'consultations'>
  ) => {
    try {
      const now = new Date().toISOString();
      const newPet: IPet = {
        ...petData,
        id: uuidv4(),
        createdAt: now,
        updatedAt: now,
        history: [],
        vaccines: [],
        medications: [],
        healthIssues: [],
        consultations: [],
      };
      await storageService.addPet(newPet);
      setPets(prev => [...prev, newPet]);
    } catch (err) {
      setError('Erro ao adicionar pet');
      console.error(err);
      throw err;
    }
  };

  const updatePet = async (updatedPet: IPet) => {
    try {
      updatedPet.updatedAt = new Date().toISOString();
      await storageService.updatePet(updatedPet);
      setPets(prev => prev.map(pet => (pet.id === updatedPet.id ? updatedPet : pet)));
    } catch (err) {
      setError('Erro ao atualizar pet');
      console.error(err);
      throw err;
    }
  };

  const deletePet = async (petId: string) => {
    try {
      await storageService.deletePet(petId);
      setPets(prev => prev.filter(pet => pet.id !== petId));
    } catch (err) {
      setError('Erro ao deletar pet');
      console.error(err);
      throw err;
    }
  };

  const clearAllPets = async () => {
    try {
      await storageService.clearAllPets();
      setPets([]);
    } catch (err) {
      setError('Erro ao limpar pets');
      console.error(err);
      throw err;
    }
  };

  const getPetById = (petId: string) => {
    return pets.find(pet => pet.id === petId);
  };

  useEffect(() => {
    loadPets();
  }, []);

  return (
    <AppContext.Provider
      value={{
        pets,
        loading,
        error,
        addPet,
        updatePet,
        deletePet,
        clearAllPets,
        loadPets,
        getPetById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
