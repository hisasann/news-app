import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
    flexDirection: 'column',  // column はデフォルトなので書かなくてもよい
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://picsum.photos/id/10/100/100' }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi u
          </Text>
          <Text>ReactNews</Text>
        </View>
      </View>
    </View>
  );
}
