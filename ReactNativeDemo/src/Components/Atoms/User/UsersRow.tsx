import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import User from '../../../Types/User/User';

/**
 * @param props The user to render
 * @returns A rendered View with some of the user data
 */
const UserRow = (props: {user: User}) => {
  return (
    <View style={styles.userRow}>
      <Text>{props.user.name}</Text>
      <Text>{props.user.username}</Text>
      <Text>{props.user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userRow: {
    margin: 16,
  },
});

export default UserRow;
