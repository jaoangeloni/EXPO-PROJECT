# 🧠 Jogo de adivinhação de palavras (React Native)

Este é um pequeno jogo estilo **Termo/Wordle**, desenvolvido com **React Native**, onde o usuário precisa adivinhar uma palavra de 5 letras em até 6 tentativas. O app oferece feedback visual para cada letra digitada, indicando se a letra está correta e/ou na posição certa.

---
## 🧑‍💻 Autores
- João Pedro Angeloni Alvarenga
- Rafael de Souza Oliveira
- Victor Augusto Nascimento
- Weslley Novelino Cavallaro

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

## 🧩 Estrutura dos componentes

```bash
.
├── App.tsx
├── components/
│   ├── row.tsx         # Renderiza uma linha do jogo
│   ├── button.tsx      # Botão de novo jogo
│   └── title.tsx       # Título da tela
├── utils/
│   └── words.ts        # Constantes e função para sortear a palavra
⚙️ Como Rodar o Projeto
```

Clone e acesse o repositório:

```bash
git clone https://github.com/jaoangeloni/EXPO-PROJECT.git
cd EXPO-PROJECT
```

Instale as dependências:

```bash
npm install
```

Execute o projeto (via Expo):
```bash
npm start
```

## 🎨 Feedback Visual
- 🔲 Cinza escuro: letra ainda não avaliada
- 🟨 Amarelo: letra existe na palavra, mas está na posição errada
- 🟩 Verde: letra correta na posição correta
- ⬜ Contorno branco: letra atualmente sendo digitada

## 📚 Referências
- React Native Docs: https://reactnative.dev/docs/getting-started
- StyleSheet em React Native: https://reactnative.dev/docs/style
- Manipulação de múltiplos refs com useRef: https://react.dev/reference/react/useRef
- Conceito do jogo Wordle: https://www.nytimes.com/games/wordle/index.html
- Expo: https://expo.dev/

## 🧠 Aprendizados
- Gerenciamento de estado com useState
- Composição de interfaces reativas e acessíveis
- Componentização de telas em React Native

## 📌 Futuras Melhorias
- Suporte a diferentes tamanhos de palavras
- Inclusão de animações de vitória/erro
- Histórico de partidas e estatísticas
