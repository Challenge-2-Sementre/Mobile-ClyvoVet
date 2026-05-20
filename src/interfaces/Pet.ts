export interface IVaccine {
  id: string;
  name: string;
  dueDate: string;
  status: 'scheduled' | 'completed' | 'overdue';
}

export interface IMedication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  status: 'ongoing' | 'completed' | 'paused';
}

export interface IConsultation {
  id: string;
  date: string;
  reason: string;
  veterinarian: string;
  notes: string;
}

export interface ITutorProfile {
  name: string;
  email: string;
  phone: string;
  relation: string;
}

export interface IAppSettings {
  theme: 'light' | 'dark';
  notificationsEnabled: boolean;
  language: 'pt-BR' | 'en-US';
}

export interface IPet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: string;
  weight: string;
  specialNeeds: string;
  tutor: string;
  history: string[];
  vaccines: IVaccine[];
  medications: IMedication[];
  healthIssues: string[];
  consultations: IConsultation[];
  createdAt: string;
  updatedAt: string;
}
