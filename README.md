# Sprint 1 Mobile - Gestor de Tarefas

Um aplicativo mobile moderno desenvolvido com **React Native** e **TypeScript** para gerenciamento eficiente de tarefas diárias.

## 🎯 Objetivo

Criar um protótipo funcional com navegação entre telas, organização de código, manipulação de estado e persistência local de dados usando **AsyncStorage**.

## ✨ Recursos

- ✅ **Gerenciar Tarefas**: Criar, editar, deletar e marcar tarefas como completas
- 📊 **Dashboard**: Visualizar estatísticas de tarefas e progresso geral
- 🏷️ **Prioridades**: Classificar tarefas por baixa, média ou alta prioridade
- 📅 **Data de Vencimento**: Definir e visualizar datas de vencimento
- 💾 **Persistência Local**: Salvar dados em AsyncStorage
- ⚙️ **Configurações**: Gerenciar notificações, idioma e tema
- 🎨 **Interface Intuitiva**: Design moderno e responsivo

## 📱 Navegação

O app possui navegação em abas com três telas principais:

### 1. **Início (Home)**
- Resumo geral das tarefas
- Estatísticas (Total, Completas, Pendentes, Alta Prioridade)
- Barra de progresso
- Acesso rápido às últimas tarefas
- Botões para navegar para outras seções

### 2. **Tarefas (Tasks)**
- Listagem de todas as tarefas
- Filtros por status (Todas, Pendentes, Completas)
- Criar nova tarefa
- Marcar como completa
- Visualizar detalhes
- Deletar tarefa

### 3. **Configurações (Settings)**
- Ativar/desativar notificações
- Escolher idioma (PT-BR / EN-US)
- Alternar tema (Claro/Escuro)
- Informações sobre o app
- Limpar todos os dados

## 📁 Estrutura do Projeto

```
sprint1mobile/
├── src/
│   ├── screens/              # Telas principais
│   │   ├── HomeScreen.tsx
│   │   ├── TaskListScreen.tsx
│   │   ├── CreateTaskScreen.tsx
│   │   ├── TaskDetailsScreen.tsx
│   │   └── SettingsScreen.tsx
│   │
│   ├── components/           # Componentes reutilizáveis
│   │   ├── TaskCard.tsx
│   │   ├── Input.tsx
│   │   ├── Button.tsx
│   │   └── Header.tsx
│   │
│   ├── types/                # Tipos TypeScript
│   │   └── index.ts
│   │
│   ├── interfaces/           # Interfaces de dados
│   │   └── Task.ts
│   │
│   ├── styles/               # Estilos globais
│   │   ├── colors.ts
│   │   └── spacing.ts
│   │
│   └── data/                 # Gerenciamento de estado e storage
│       ├── storage.ts        # Serviço AsyncStorage
│       └── AppContext.tsx    # Context API
│
├── App.tsx                   # Configuração da navegação
├── app.json                  # Configuração Expo
├── package.json              # Dependências
├── tsconfig.json             # Configuração TypeScript
├── babel.config.js           # Configuração Babel
└── README.md                 # Documentação
```

## 🚀 Instalação

### Pré-requisitos
- Node.js (v16+)
- npm ou yarn
- Expo CLI: `npm install -g expo-cli`

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/sprint1mobile.git
cd sprint1mobile
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor Expo**
```bash
npm start
# ou
expo start
```

4. **Execute no emulador ou dispositivo**
- **Android**: Pressione `a` no terminal (requer Android Studio)
- **iOS**: Pressione `i` no terminal (apenas macOS)
- **Expo Go**: Escaneie o QR code com o app Expo Go no seu dispositivo

## 💻 Dependências Principais

```json
{
  "react": "18.2.0",
  "react-native": "0.73.2",
  "@react-navigation/native": "^6.1.9",
  "@react-navigation/bottom-tabs": "^6.5.11",
  "@react-native-async-storage/async-storage": "^1.21.0",
  "typescript": "~5.3.3"
}
```

## 📋 Interface da Aplicação

### Tela Inicial
- Cards com estatísticas
- Barra de progresso visual
- Últimas tarefas acessadas
- Botões de ação rápida

### Tela de Tarefas
- Listagem com cards informativos
- Filtros por status
- Ações rápidas (marcar como feito, deletar)
- Botão flutuante para nova tarefa

### Criar Tarefa
- Campo de título (obrigatório)
- Campo de descrição (opcional)
- Seletor de prioridade
- Data de vencimento
- Validação de formulário

### Detalhes da Tarefa
- Visualização completa da tarefa
- Modo de edição
- Marcar como completa
- Deletar tarefa
- Histórico de criação

### Configurações
- Toggle para notificações
- Seletor de idioma
- Seletor de tema
- Informações do app
- Botão de limpeza de dados

## 🎨 Design System

### Cores
- **Primária**: `#007AFF` (Azul)
- **Sucesso**: `#34C759` (Verde)
- **Aviso**: `#FF9500` (Laranja)
- **Erro**: `#FF3B30` (Vermelho)

### Espaçamento
- xs: 4px | sm: 8px | md: 12px | lg: 16px | xl: 20px | xxl: 24px | xxxl: 32px

### Tipografia
- Títulos: 24px, Bold
- Subtítulos: 18px, SemiBold
- Texto: 14px, Regular

## 🔄 Fluxo de Dados

```
App.tsx (Navegação)
  ↓
AppProvider (Context API)
  ↓
Screens (Componentes de Tela)
  ↓
Components (Componentes Reutilizáveis)
  ↓
AppContext (Estado Global)
  ↓
storageService (AsyncStorage)
```

## 📦 Persistência de Dados

Os dados são salvos automaticamente em **AsyncStorage** quando você:
- Cria uma nova tarefa
- Edita uma tarefa existente
- Marca uma tarefa como completa
- Deleta uma tarefa

Ao reiniciar o app, todos os dados são restaurados automaticamente.

## ✅ Casos de Uso

### Criar Tarefa
1. Clique em "Nova Tarefa" ou "+"
2. Preencha o título e descrição
3. Defina a prioridade
4. Selecione a data de vencimento
5. Clique em "Criar Tarefa"

### Editar Tarefa
1. Na lista ou detalhes, clique na tarefa
2. Clique em "Editar"
3. Modifique os dados
4. Clique em "Salvar Mudanças"

### Marcar como Completa
- Clique na checkbox na tarefa ou na tela de detalhes

### Deletar Tarefa
- Clique no botão "Deletar" (confirme a ação)

## 🧪 Testes

O projeto foi testado em:
- ✅ Emulador Android
- ✅ Emulador iOS
- ✅ Expo Go (dispositivo físico)

## 📝 Checklist de Requisitos

- ✅ React Native com TypeScript
- ✅ Navegação entre telas
- ✅ Organização de código em pastas
- ✅ Manipulação de estado (Context API)
- ✅ Persistência com AsyncStorage
- ✅ Tela inicial
- ✅ Tela de listagem
- ✅ Tela de cadastro
- ✅ Tela de detalhes
- ✅ Tela de configurações
- ✅ Navegação fluida
- ✅ Interface intuitiva
- ✅ Código bem organizado

## 🐛 Troubleshooting

### Erro: "Module not found"
```bash
rm -rf node_modules
npm install
```

### Erro: "AsyncStorage not persisting"
Verifique se o provider está envolvendo toda a app:
```tsx
<AppProvider>
  <NavigationContainer>
    {/* ... */}
  </NavigationContainer>
</AppProvider>
```

### Erro: "TypeScript type errors"
Verifique o `tsconfig.json` e rode:
```bash
npm run lint
```

## 📱 Executar em Dispositivo Real

1. Instale o app **Expo Go**
2. Escaneie o QR code gerado ao iniciar o projeto
3. O app abrirá no seu dispositivo

## 🔗 Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **TypeScript**: Linguagem com tipagem estática
- **React Navigation**: Navegação entre telas
- **AsyncStorage**: Persistência de dados local
- **Context API**: Gerenciamento de estado global
- **Expo**: Plataforma de desenvolvimento

## 👨‍💻 Autor

Desenvolvido como parte do desafio de Sprint Mobile.

## 📄 Licença

Este projeto está disponível sob a licença MIT.

---

**Versão**: 1.0.0  
**Última atualização**: May 19, 2026  
**Status**: ✅ Funcional
