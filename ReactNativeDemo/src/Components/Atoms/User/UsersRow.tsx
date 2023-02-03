import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import User from '../../../Types/User/User';

/**
 * @param props The user to render
 * @returns A rendered View with some of the user data
 */
const UserRow = (props: {user: User; onPress: (userId: Number) => void}) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress?.(props.user.id)}
      style={styles.userRow}>
      <View>
        <Text>{props.user.name}</Text>
        <Text>{props.user.username}</Text>
        <Text>{props.user.email}</Text>
      </View>
      <View style={styles.spacer} />
      {/* TODO: Import react native svg lib */}
      <Text>{'>'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
  spacer: {
    flex: 1,
  },
});

export default UserRow;
