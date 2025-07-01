import React, { useEffect, useRef, useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { Row } from './components/row';
import { Button } from './components/button';
import { Title } from './components/title';
import { WORD_LENGTH, MAX_TRIES, getRandomWord } from './utils/words';

export default function App() {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState<string[]>(Array(MAX_TRIES).fill(''));
  const [activeRow, setActiveRow] = useState(0);
  const inputsRef = useRef<TextInput[]>([]);

  const startNewGame = () => {
    setTargetWord(getRandomWord());
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
        { text: 'OK', onPress: startNewGame }
      ]);
    } else if (rowIndex + 1 === MAX_TRIES) {
      Alert.alert('Fim de jogo!', `A palavra era: ${targetWord}`, [
        { text: 'OK', onPress: startNewGame }
      ]);
    } else {
      setActiveRow(rowIndex + 1);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.content}>
        <Title />
        {guesses.map((guess, index) => (
          <Row
            key={index}
            guess={guess}
            rowIndex={index}
            activeRow={activeRow}
            wordLength={WORD_LENGTH}
            targetWord={targetWord}
            inputRef={inputsRef}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ))}
        <Button onPress={startNewGame} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001221',
  },
  content: {
    paddingTop: 60,
    alignItems: 'center',
    paddingBottom: 40
  }
});
