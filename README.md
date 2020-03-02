# 🧰 news-app

[React Native入門：ニュースアプリを作りながら覚えよう/Hooks対応 2020年版 | Udemy](https://www.udemy.com/course/react-native-first-step/)

## expo-cliをインストールする

[Expo — Learn how](https://expo.io/learn)

```bash
$ npm install expo-cli --global
```

## expoプロジェクトを作成する

```bash
expo init my-new-project
cd my-new-project
```

## expoプロジェクトを起動する

```bash
expo start
```

## react-navigationのv4について

こちらのコースでは `react-navigation` が、最新の v5 ではなく **v4** をベースに作られているので、

見るドキュメントとコードに少し違いが出てきます。

以下のようにバージョン指定して行うことで動作は問題なくできました。

```bash
$ yarn add react-navigation@4.0.10
$ yarn add react-navigation-stack@1.10.3
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

[Getting started · React Navigation](https://reactnavigation.org/docs/en/4.x/getting-started.html)

## React Native Debuggerを使ってみる

Homebrew で `react-native-debugger` をインストールします。

```bash
$ brew update && brew cask install react-native-debugger
```

[jhen0409/react-native-debugger: The standalone app based on official debugger of React Native, and includes React Inspector / Redux DevTools](https://github.com/jhen0409/react-native-debugger)

続いて、 ReactNative プロジェクトのディレクトリで以下を実行します。

```bash
$ yarn add redux-devtools-extension
```

[zalmoxisus/redux-devtools-extension: Redux DevTools extension.](https://github.com/zalmoxisus/redux-devtools-extension)

Redux を React Native Debugger でデバッグできるようにします。

```javascript
import { composeWithDevTools } from 'redux-devtools-extension';

...

const store = createStore(rootReducer, composeWithDevTools());
```

alfred で **React Native Debugger.app** を起動します。

iOS シミュレーター側で `Command + D` -> Debug Remote JS をクリックします。

これで、 ReactNativeDebugger と iOS シミュレーターがコネクトされます。

## 参考リンク

* [Lorem Picsum](https://picsum.photos/)
