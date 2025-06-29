import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const WORD_LENGTH = 5;
const MAX_TRIES = 6;

const words = [
  'CASAS', 'TERRA', 'MELAO', 'LIVRO', 'FREIO',
  'CORAL', 'LUZES', 'BOMBA', 'NORTE', 'GIRAR'
];

type Guess = string;

export default function App() {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState<Guess[]>(Array(MAX_TRIES).fill(''));
  const [activeRow, setActiveRow] = useState(0);
  const inputsRef = useRef<TextInput[]>([]);

  const startNewGame = () => {
    setTargetWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
    setGuesses(Array(MAX_TRIES).fill(''));
    setActiveRow(0);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const handleChange = (text: string, rowIndex: number) => {
    const upper = text.toUpperCase().replace(/[^A-Z]/g, '');
    const trimmed = upper.slice(0, WORD_LENGTH);
    const updated = [...guesses];
    updated[rowIndex] = trimmed;
    setGuesses(updated);
  };

  const handleSubmit = (rowIndex: number) => {
    if (guesses[rowIndex].length !== WORD_LENGTH) return;
    if (guesses[rowIndex] === targetWord) {
      Alert.alert('Parabéns!', 'Você acertou a palavra!', [
        { text: 'OK', onPress: () => startNewGame() }
      ]);
    } else if (rowIndex + 1 === MAX_TRIES) {
      Alert.alert('Fim de jogo!', `A palavra era: ${targetWord}`, [
        { text: 'OK', onPress: () => startNewGame() }
      ]);
    } else {
      setActiveRow(rowIndex + 1);
    }
  };

  const getBoxColor = (letter: string, index: number, rowIndex: number) => {
    const currentWord = guesses[rowIndex];
    if (rowIndex >= activeRow) return '#3A3A3C';
    if (targetWord[index] === letter) return '#538D4E';
    if (targetWord.includes(letter)) return '#B59F3B';
    return '#3A3A3C';
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Descubra a Palavra</Text>
        {guesses.map((guess, rowIndex) => (
          <TouchableOpacity
            key={rowIndex}
            activeOpacity={1}
            onPress={() => inputsRef.current[rowIndex]?.focus()}
          >
            <View style={styles.row}>
              {Array.from({ length: WORD_LENGTH }).map((_, i) => (
                <View
                  key={i}
                  style={[styles.box, {
                    backgroundColor: getBoxColor(guess[i], i, rowIndex),
                    borderColor: rowIndex === activeRow ? '#818384' : '#3A3A3C'
                  }]}
                >
                  <Text style={styles.letter}>{guess[i] || ''}</Text>
                </View>
              ))}
            </View>
            {rowIndex === activeRow && (
              <TextInput
                ref={ref => { inputsRef.current[rowIndex] = ref!; }}
                value={guess}
                onChangeText={text => handleChange(text, rowIndex)}
                onSubmitEditing={() => handleSubmit(rowIndex)}
                autoFocus
                maxLength={WORD_LENGTH}
                style={styles.hiddenInput}
                autoCapitalize="characters"
                keyboardType="default"
              />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121213',
  },
  content: {
    paddingTop: 60,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5
  },
  box: {
    width: 50,
    height: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  letter: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  hiddenInput: {
    height: 0,
    opacity: 0,
    position: 'absolute'
  }
});
