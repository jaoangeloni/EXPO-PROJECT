import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
    onPress: () => void;
};

export const Button = ({ onPress }: Props) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>🔁 Novo Jogo</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        backgroundColor: '#538D4E',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});
