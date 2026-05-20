import { IPet } from '@interfaces/Pet';
import { v4 as uuidv4 } from 'uuid';

export const samplePets: IPet[] = [
  {
    id: uuidv4(),
    name: 'Luna',
    species: 'Cachorro',
    breed: 'Golden Retriever',
    age: '4 anos',
    weight: '28 kg',
    specialNeeds: 'Sensível a alguns alimentos',
    tutor: 'Mariana Silva',
    history: ['Vacina antirrábica em dia', 'Alergia leve a pólen registrado em 2024'],
    vaccines: [
      {
        id: uuidv4(),
        name: 'V8 + V10',
        dueDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0],
        status: 'scheduled',
      },
    ],
    medications: [
      {
        id: uuidv4(),
        name: 'Suplemento articular',
        dosage: '1 cápsula',
        frequency: 'Diário',
        status: 'ongoing',
      },
    ],
    healthIssues: ['Alergia leve', 'Sensibilidade digestiva'],
    consultations: [
      {
        id: uuidv4(),
        date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0],
        reason: 'Consulta de rotina e revisão de vacinas',
        veterinarian: 'Dr. Ricardo Campos',
        notes: 'Agendar avaliação de peso e conduta alimentar.',
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Mia',
    species: 'Gato',
    breed: 'Siamês',
    age: '2 anos',
    weight: '4,3 kg',
    specialNeeds: 'Nenhuma',
    tutor: 'Gabriel Souza',
    history: ['Castração realizada em 2023', 'Vacina felina completa'],
    vaccines: [
      {
        id: uuidv4(),
        name: 'V10 Felina',
        dueDate: new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0],
        status: 'scheduled',
      },
    ],
    medications: [],
    healthIssues: [],
    consultations: [
      {
        id: uuidv4(),
        date: new Date(new Date().getTime() + 20 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0],
        reason: 'Revisão de saúde anual',
        veterinarian: 'Dra. Paula Lemos',
        notes: 'Verificar saúde bucal e dentes.',
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
