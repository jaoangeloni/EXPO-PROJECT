export const WORD_LENGTH = 5;
export const MAX_TRIES = 6;

export const words = [
    'CASAS', 'TERRA', 'MELAO', 'LIVRO', 'FREIO',
    'CORAL', 'LUZES', 'BOMBA', 'NORTE', 'GIRAR'
];

export const getRandomWord = () =>
    words[Math.floor(Math.random() * words.length)].toUpperCase();
