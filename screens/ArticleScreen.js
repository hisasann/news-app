import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is ArticleScreen</Text>
    </SafeAreaView>
  );
}
