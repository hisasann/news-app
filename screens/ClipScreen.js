import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ClipScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const { clips } = user;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => {
          return (
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              author={item.author}
              onPress={() => {
                navigation.navigate('Article', {
                  article: item,
                });
              }}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ClipScreen;
