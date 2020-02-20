import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  const [articles, setArticles] = useState([]);

  // フック API リファレンス – React - https://ja.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
  useEffect(() => {
    // alert('called');

    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000);

    return () => clearTimeout(timer);
    // 空の配列 ([]) を渡した場合、副作用内では props と state の値は常にその初期値のままになります。[] を渡すことはおなじみの componentDidMount と componentWillUnmount による概念と似ているように感じるでしょうが、通常はこちらやこちらのように、副作用を過度に再実行しないためのよりよい解決方法があります。また useEffect はブラウザが描画し終えた後まで遅延されますので、追加の作業をしてもそれほど問題にならないということもお忘れなく。
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
