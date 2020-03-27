import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const ClipButton = ({ onPress, enabled }) => {
  // FontAwesome
  // const name = enabled ? 'bookmark' : 'bookmark-o';
  // Entypo
  const name = enabled ? 'bookmarks' : 'bookmark';

  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo
        name={name}
        size={40}
        color="gray"
        style={styles.container}
      />
    </TouchableOpacity>
  );
};

export default ClipButton;
