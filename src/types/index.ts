export type RootStackParamList = {
  Home: undefined;
  PetsTab: undefined;
  VetAI: undefined;
  Settings: undefined;
};

export type PetsStackParamList = {
  Pets: undefined;
  AddPet: undefined;
  PetDetails: {
    petId: string;
  };
};
