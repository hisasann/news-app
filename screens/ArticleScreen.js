import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const ArticleScreen = props => {
  const [url, setUrl] = useState();

  useEffect(() => {
    const article = props.navigation.getParam('article');
    setUrl(article.url);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {
        props.addClip({clip: props.navigation.getParam('article')});
      }}>
        <Text style={{ fontSize: 30, margin: 10 }}>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        props.deleteClip({clip: props.navigation.getParam('article')});
      }}>
        <Text style={{ fontSize: 30, margin: 10 }}>DELETE_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};
const mapDispatchToProps = {addClip, deleteClip};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen);
