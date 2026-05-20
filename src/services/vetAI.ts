import { vetResponses } from '@data/vetResponses';

export const getVetSuggestions = (symptoms: string) => {
  const query = symptoms.trim().toLowerCase();

  if (!query) {
    return [];
  }

  const matches = vetResponses.filter(response =>
    response.keywords.some(keyword => query.includes(keyword))
  );

  if (matches.length > 0) {
    return matches;
  }

  return [
    {
      id: 'general',
      title: 'Observação geral',
      keywords: [],
      details: [
        'Monitore o comportamento do pet nas próximas 24 horas.',
        'Mantenha hidratação e alimentação leve.',
        'Consulte um veterinário para diagnóstico preciso.',
      ],
    },
  ];
};
