# Quick Start Guide - Sprint 1 Mobile

## 🚀 Início Rápido

### 1. Verificar Instalação
```bash
# Verificar se as dependências foram instaladas
npm list expo react react-native
```

### 2. Iniciar o Projeto
```bash
npm start
# ou
expo start
```

### 3. Executar em Diferentes Plataformas

**Android Emulator:**
```bash
npm run android
# ou pressione 'a' no terminal após 'npm start'
```

**iOS Simulator (macOS only):**
```bash
npm run ios
# ou pressione 'i' no terminal após 'npm start'
```

**Expo Go (Dispositivo Real):**
```bash
npm start
# Escaneie o QR code com Expo Go ou câmera
```

## 📋 Verificação de Saúde do Projeto

### TypeScript
- Todos os arquivos `.ts` e `.tsx` foram criados com tipagem completa
- `tsconfig.json` configurado com paths para importações limpas
- Path aliases: `@screens/*`, `@components/*`, `@styles/*`, etc.

### Estrutura Criada
- ✅ 5 Screens funcionais (Home, TaskList, CreateTask, TaskDetails, Settings)
- ✅ 4 Componentes reutilizáveis (Header, Button, Input, TaskCard)
- ✅ Sistema de Context API para state management
- ✅ AsyncStorage service configurado
- ✅ Design system com colors, spacing, typography
- ✅ Navegação bottom tabs com React Navigation
- ✅ Tipos e interfaces TypeScript

## 🔧 Configuração Recomendada

### VS Code Extensions (Opcional)
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- TypeScript Vue Plugin (Volar)

### Dependências de Desenvolvimento (Opcional)
```bash
npm install --save-dev prettier eslint @react-native-community/eslint-config
```

## 🧪 Testar Funcionalidades

### 1. Home Screen
- ✅ Mostra estatísticas gerais
- ✅ Exibe últimas tarefas
- ✅ Barra de progresso funcional

### 2. Task List
- ✅ Lista todas as tarefas
- ✅ Filtra por status (Todas, Pendentes, Completas)
- ✅ Botão para criar nova tarefa

### 3. Create Task
- ✅ Formulário com validação
- ✅ Prioridade e data de vencimento
- ✅ Salva em AsyncStorage

### 4. Task Details
- ✅ Visualização completa
- ✅ Edição inline
- ✅ Marcar como completa/pendente
- ✅ Deletar com confirmação

### 5. Settings
- ✅ Toggle para notificações
- ✅ Seletor de idioma
- ✅ Botão de limpeza de dados

## 🐛 Debugging

### Ver Logs
```bash
# No terminal após npm start, pressione 'j' para abrir debugger
# Ou use: react-native log-android / react-native log-ios
```

### Clear Cache
```bash
npm start --clear
# ou
expo start -c
```

### Reset Project
```bash
rm -rf node_modules
npm install
npm start
```

## 📦 Versões das Dependências

- expo: ^50.0.0
- react: 18.2.0
- react-native: 0.73.2
- @react-navigation/native: ^6.1.9
- typescript: ~5.3.3
- @react-native-async-storage/async-storage: ^1.21.0

## 🚨 Possíveis Problemas

**Problema**: "Cannot find module '@data/AppContext'"
**Solução**: Verifique o path alias no `tsconfig.json`

**Problema**: AsyncStorage não persiste dados
**Solução**: Certifique-se de que AppProvider envolve toda a NavigationContainer

**Problema**: TypeScript errors
**Solução**: Rode `tsc --noEmit` para verificar tipos

## 📝 Notas Importantes

1. O projeto usa Expo, não precisa de Android Studio para rodar no emulador (usa USB connection)
2. AsyncStorage requer que o app seja salvo para persistir dados
3. A navegação bottom tabs renderiza todas as telas simultaneamente (é normal)
4. Cada tela mantém seu próprio estado de navegação

## ✅ Checklist Final

- [ ] npm install foi executado com sucesso
- [ ] npm start inicializa sem erros
- [ ] App abre no emulador/dispositivo
- [ ] Consegue criar tarefas
- [ ] Consegue editar tarefas
- [ ] Consegue deletar tarefas
- [ ] Dados persistem após reload
- [ ] Navegação entre abas funciona
- [ ] Filtros de tarefas funcionam
- [ ] Configurações são salvas

---

**Pronto para desenvolver! 🎉**
