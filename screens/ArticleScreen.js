import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ArticleScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: props.navigation.getParam('article').url }} />
    </SafeAreaView>
  );
};
