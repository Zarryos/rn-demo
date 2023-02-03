import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import User from '../../../Types/User/User';

/**
 * @param props The user to render
 * @returns A rendered View with all of the user data
 */
const UserCard = (props: {user: User}) => {
  // TODO: i18n
  // Note: If we were to use app specific Text (a Text wrapper with pre-defined style) we should move this to the Molecules section
  return (
    <View style={styles.userRow}>
      <View>
        <Text>{'Name: ' + props.user.name}</Text>
        <Text>{'Username: ' + props.user.username}</Text>
        <Text>{'Email: ' + props.user.email}</Text>
        <Text>{'Phone: ' + props.user.phone}</Text>
        <Text>
          {'Address: ' +
            props.user.address.suite.toString() +
            ' ' +
            props.user.address.street +
            ' ' +
            props.user.address.city +
            ', ' +
            props.user.address.zipcode}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userRow: {
    margin: 16,
  },
});

export default UserCard;
