import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ClipScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.user.clips}
        renderItem={({ item }) => {
          return (
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              author={item.author}
              onPress={() => {
                props.navigation.navigate('Article', {
                  article: item
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

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(ClipScreen);
