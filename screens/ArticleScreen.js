import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useSelector, useDispatch } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';
import ClipButton from '../components/ClipButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const ArticleScreen = ({ route, navigation }) => {
  const [url, setUrl] = useState();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const { article } = route.params;
    // const article = props.navigation.getParam('article');
    setUrl(article.url);
  }, []);

  const isClipppd = () => {
    const { article } = route.params;
    // const article = props.navigation.getParam('article');
    return user.clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    const { article } = route.params;
    if (isClipppd()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipppd()} />
      <WebView
        // style={{width: 300, height: 300}}
        originWhitelist={['*']}
        // source={{ html: '<h1>Hello world</h1>' }}
        source={{ uri: url }}
      />
    </SafeAreaView>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };
// const mapDispatchToProps = { addClip, deleteClip };
//
// export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen);
export default ArticleScreen;
