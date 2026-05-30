import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  SafeAreaView,
} from 'react-native';

const notes = [
  {
    id: '1',
    title: 'Shopping List',
    content: 'Milk, Bread, Eggs',
  },
  {
    id: '2',
    title: 'Meeting Notes',
    content: 'Discuss React Native project',
  },
];

export default function HomeScreen() {
  const renderItem = ({ item }: any) => (
    <View style={styles.noteCard}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteContent}>{item.content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>App</Text>
      </View>

      {/* <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      /> */}

      <Pressable style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    padding: 20,
    paddingTop: 50,
  },

  heading: {
    fontSize: 28,
    fontWeight: '700',
  },

  list: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  noteCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  noteTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },

  noteContent: {
    color: '#666',
  },

  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fabText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});