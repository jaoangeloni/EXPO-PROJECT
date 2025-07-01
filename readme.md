# 🧠 Jogo de adivinhação de palavras (React Native)

Este é um pequeno jogo estilo **Termo/Wordle**, desenvolvido com **React Native**, onde o usuário precisa adivinhar uma palavra de 5 letras em até 6 tentativas. O app oferece feedback visual para cada letra digitada, indicando se a letra está correta e/ou na posição certa.

---

## 🧑‍💻 Autores

- João Pedro Angeloni Alvarenga  
- Rafael de Souza Oliveira  
- Victor Augusto Nascimento  
- Weslley Novelino Cavallaro  

---

## 🚀 Funcionalidades

- ✅ Adivinhação de palavras com limite de tentativas  
- 🟩 Feedback visual (cor verde para letra correta e bem posicionada, amarelo para correta mas fora de posição)  
- ⌨️ Input invisível controlado por linha  
- 🔁 Reinício automático ao fim da partida  
- 🎯 Totalmente componentizado para facilitar manutenção  

---

## 📦 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Expo](https://expo.dev/)  

---

## 🧩 Estrutura dos Componentes

```bash
.
├── App.tsx
├── components/
│   ├── row.tsx         # Renderiza uma linha do jogo
│   ├── button.tsx      # Botão de novo jogo
│   └── title.tsx       # Título da tela
├── utils/
│   └── words.ts        # Constantes e função para sortear a palavra
```

---

## ⚙️ Como Rodar o Projeto

Este projeto é desenvolvido com **Expo**, o que facilita tanto o desenvolvimento quanto a execução em dispositivos móveis e emuladores.

### 📱 Opção 1: Executar no celular com **Expo Go**

1. Instale o app **Expo Go** no seu celular:  
   - [Android (Google Play)](https://play.google.com/store/apps/details?id=host.exp.exponent)  
   - [iOS (App Store)](https://apps.apple.com/app/expo-go/id982107779)

2. No seu terminal, execute o projeto:

   ```bash
   npm install
   npm start
   ```

3. Leia o QR Code exibido no terminal ou na aba do navegador com o app **Expo Go**.

---

### 💻 Opção 2: Executar localmente com emulador Android/iOS

Certifique-se de ter:

- Node.js e npm instalados  
- Expo CLI instalado globalmente:  
  ```bash
  npm install -g expo-cli
  ```
- Um emulador Android/iOS rodando no seu sistema

Para iniciar:

```bash
npm install
npm start
```

Escolha a opção desejada no menu do terminal (por exemplo, abrir no Android).

---

## 🎨 Feedback Visual

- 🔲 **Cinza escuro:** letra ainda não avaliada  
- 🟨 **Amarelo:** letra existe na palavra, mas está na posição errada  
- 🟩 **Verde:** letra correta na posição correta  
- ⬜ **Contorno branco:** letra atualmente sendo digitada  

---

## 📚 Referências

- [React Native Docs](https://reactnative.dev/docs/getting-started)  
- [StyleSheet em React Native](https://reactnative.dev/docs/style)  
- [useRef em React](https://react.dev/reference/react/useRef)  
- [Jogo Wordle original (NY Times)](https://www.nytimes.com/games/wordle/index.html)  
- [Expo](https://expo.dev/)  

---

## 🧠 Aprendizados

- Gerenciamento de estado com `useState`  
- Composição de interfaces reativas e acessíveis  
- Componentização de telas em React Native  
- Uso de `useRef` para múltiplos inputs dinâmicos  

---

## 📌 Futuras Melhorias

- Suporte a diferentes tamanhos de palavras  
- Inclusão de animações de vitória/erro  
- Histórico de partidas e estatísticas  
- Dificuldade ajustável e ranking de desempenho  
