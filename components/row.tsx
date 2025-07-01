import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
    guess: string;
    rowIndex: number;
    activeRow: number;
    wordLength: number;
    targetWord: string;
    inputRef: React.RefObject<TextInput[]>;
    onChange: (text: string, rowIndex: number) => void;
    onSubmit: (rowIndex: number) => void;
};

export const Row = ({
    guess,
    rowIndex,
    activeRow,
    wordLength,
    targetWord,
    inputRef,
    onChange,
    onSubmit,
}: Props) => {
    const isCurrentChar = (charIndex: number) => {
        return rowIndex === activeRow && guess.length === charIndex;
    };

    const getBoxColor = (letter: string, index: number) => {
        if (rowIndex >= activeRow) return '#3A3A3C';
        if (targetWord[index] === letter) return '#538D4E';
        if (targetWord.includes(letter)) return '#B59F3B';
        return '#3A3A3C';
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => inputRef.current?.[rowIndex]?.focus()}
        >
            <View style={styles.row}>
                {Array.from({ length: wordLength }).map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.box,
                            {
                                backgroundColor: getBoxColor(guess[i], i),
                                borderColor: isCurrentChar(i)
                                    ? '#FFFFFF'
                                    : rowIndex === activeRow
                                        ? '#818384'
                                        : '#3A3A3C',
                                borderWidth: isCurrentChar(i) ? 3 : 2
                            }
                        ]}
                    >
                        <Text style={styles.letter}>{guess[i] || ''}</Text>
                    </View>
                ))}
            </View>
            {rowIndex === activeRow && (
                <TextInput
                    ref={ref => { inputRef.current![rowIndex] = ref!; }}
                    value={guess}
                    onChangeText={text => onChange(text, rowIndex)}
                    onSubmitEditing={() => onSubmit(rowIndex)}
                    autoFocus
                    maxLength={wordLength}
                    style={styles.hiddenInput}
                    autoCapitalize="characters"
                    keyboardType="default"
                />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
        margin: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
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
