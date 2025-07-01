import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Title = () => (
    <Text style={styles.title}>Descubra a Palavra</Text>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: '#2343da',
        fontWeight: 'bold',
        marginBottom: 20,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 2,
    }
});
