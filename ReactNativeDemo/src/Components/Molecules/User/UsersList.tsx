import React from 'react';
import {FlatList} from 'react-native';
import User from '../../../Types/User/User';
import UserRow from '../../Atoms/User/UsersRow';

/**
 * @param props A list of users
 * @returns A rendered FlatList of users
 */
const UsersList = (props: {users: [User]; error: String | undefined}) => {
  /**
   * Render an User row
   */
  const renderUserRow = (user: User) => <UserRow user={user} />;

  // TODO: Usage of error to display a placeholder, a toast or any other design choice
  return (
    <FlatList data={props.users} renderItem={({item}) => renderUserRow(item)} />
  );
};

export default UsersList;
