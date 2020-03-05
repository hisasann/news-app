import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';
// react-native-web-community/react-native-web-webview: React Native for Web implementation of RN's WebView - https://github.com/react-native-web-community/react-native-web-webview
// import WebView from 'react-native-web-webview';
import { connect } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';
import ClipButton from '../components/ClipButton';

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

  const isClipppd = () => {
    const article = props.navigation.getParam('article');
    return props.user.clips.some(clip => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipppd()) {
      props.deleteClip({ clip: props.navigation.getParam('article') });
    } else {
      props.addClip({ clip: props.navigation.getParam('article') });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton
        onPress={toggleClip}
        enabled={isClipppd()}
      />
      {/*
        おそらく iframe で表示されるため、 sameorigin じゃないのでエラーが履かれてしまう
        Refused to display 'https://headlines.yahoo.co.jp/hl?a=20200305-00000091-mai-int' in a frame because it set 'X-Frame-Options' to 'sameorigin'
      */}
      <WebView
        // style={{width: 300, height: 300}}
        originWhitelist={['*']}
        // source={{ html: '<h1>Hello world</h1>' }}
        source={{ uri: url }}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = { addClip, deleteClip };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen);
