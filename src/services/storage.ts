import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'notes';

export const saveNotes = async (notes: any[]) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(notes));
};

export const getNotes = async () => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};