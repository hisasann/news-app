import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    // backgroundColor: 'red',
    width: 100,
  },
  rightContainer: {
    // backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column', // column はデフォルトなので書かなくてもよい
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/id/10/100/100"
        author="SampleNews"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
               ad minim veniam, quis nostrud exercitation ullamco laboris nisi u"
      />
      <ListItem
        imageUrl="https://picsum.photos/id/10/100/100"
        author="SampleNews"
        title="Hello World"
      />
      <ListItem
        imageUrl="https://picsum.photos/id/10/100/100"
        author="SampleNews"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
               ad minim veniam, quis nostrud exercitation ullamco laboris nisi u"
      />
    </View>
  );
}
