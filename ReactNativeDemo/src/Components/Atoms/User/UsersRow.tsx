import React from 'react';
import {View, Text} from 'react-native';
import User from '../../../Types/User/User';

const UserRow = (props: {user: User}) => {
  return (
    <View>
      <Text>{props.user.id.toString()}</Text>
    </View>
  );
};

export default UserRow;
