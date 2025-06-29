import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';

const WORD_LENGTH = 5;
const MAX_TRIES = 6;

const words = [
  'CASAS', 'TERRA', 'MELAO', 'LIVRO', 'FREIO',
  'CORAL', 'LUZES', 'BOMBA', 'NORTE', 'GIRAR'
];

type Guess = {
  word: string;
  revealed: boolean;
};

export default function App() {
  const [targetWord, setTargetWord] = useState<string>('');
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [currentInput, setCurrentInput] = useState<string>('');
  const inputRef = useRef<TextInput>(null);

  const startNewGame = () => {
    setTargetWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
    setGuesses([]);
    setCurrentInput('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const handleEnter = () => {
    if (currentInput.length !== WORD_LENGTH) return;

    const guessWord = currentInput.toUpperCase();
    const newGuess: Guess = { word: guessWord, revealed: true };

    setGuesses(prevGuesses => [...prevGuesses, newGuess]);
    setCurrentInput('');

    if (guessWord === targetWord) {
      Alert.alert(
        'Parabéns!',
        'Você acertou a palavra!',
        [{ text: 'OK', onPress: () => startNewGame() }]
      );
    } else if (guesses.length + 1 === MAX_TRIES) {
      Alert.alert(
        'Fim de jogo!',
        `A palavra era: ${targetWord}`,
        [{ text: 'OK', onPress: () => startNewGame() }]
      );
    }
  };

  const renderLetterBox = (letter: string, index: number, backgroundColor: string = '#3A3A3C', active: boolean = false) => {
    const displayLetter = letter ? letter : '';
    const boxStyle = [styles.letterBox, { backgroundColor }];

    if (active) boxStyle.push(styles.activeLetterBox as any);

    return (
      <View key={index} style={boxStyle}>
        <Text style={styles.letter}>{displayLetter}</Text>
      </View>
    );
  };

  const renderGuessRow = (guess: Guess) => {
    const letters = guess.word.split('');

    return (
      <View style={styles.guessRow} key={`guess-${guess.word}`}>
        {letters.map((letter, idx) => {
          let backgroundColor = '#3A3A3C';

          if (guess.revealed) {
            if (targetWord[idx] === letter) {
              backgroundColor = '#538D4E';
            } else if (targetWord.includes(letter)) {
              backgroundColor = '#B59F3B';
            } else {
              backgroundColor = '#3A3A3C';
            }
          }
          return renderLetterBox(letter, idx, backgroundColor, false);
        })}
      </View>
    );
  };

  const renderCurrentInputRow = () => {
    const letters = currentInput.padEnd(WORD_LENGTH).split('');

    return (
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()} key="current">
        <View style={styles.guessRow}>
          {letters.map((letter, idx) =>
            renderLetterBox(letter, idx, '#3A3A3C', true)
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderEmptyRow = (index: number) => {
    const emptyLetters = Array(WORD_LENGTH).fill('');

    return (
      <View style={styles.guessRow} key={`empty-${index}`}>
        {emptyLetters.map((_, idx) =>
          renderLetterBox('', idx, '#3A3A3C', false)
        )}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.avoidingContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Descubra a palavra</Text>

        <View style={styles.grid}>
          {[...Array(MAX_TRIES)].map((_, i) => {
            if (i < guesses.length) {
              return renderGuessRow(guesses[i]);
            } else if (i === guesses.length) {
              return renderCurrentInputRow();
            } else return renderEmptyRow(i);

          })}
        </View>

        <TextInput
          ref={inputRef}
          value={currentInput}
          onChangeText={(text) => setCurrentInput(text.toUpperCase().replace(/[^A-Z]/g, ''))}
          maxLength={WORD_LENGTH}
          autoFocus
          autoCapitalize="characters"
          onSubmitEditing={handleEnter}
          style={styles.hiddenInput}
          keyboardType="default"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  avoidingContainer: {
    flex: 1,
    backgroundColor: '#121213',
  },
  container: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  grid: {
    marginBottom: 20,
  },
  guessRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  letterBox: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#3A3A3C',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  activeLetterBox: {
    borderColor: '#818384',
  },
  letter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  hiddenInput: {
    height: 0,
    opacity: 0,
    position: 'absolute',
  },
});
