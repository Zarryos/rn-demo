import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import UsersList from '../../Components/Molecules/User/UsersList';
import {refreshAllUsers} from '../../Services/Api/users';
import {State} from '../../Stores/Redux/reducers';

/**
 * @returns A rendered list of users with a search bar
 */
const Users = () => {
  /// State of the refresh error, if any
  const [refreshError, setRefreshError] = useState<String | undefined>();

  /**
   * The stored list of users
   */
  const users = useSelector((state: State) => state.users?.list ?? []);

  /**
   * Trigger a refreshAllUsers when the component mount
   */
  useEffect(() => {
    async function fetchUsers() {
      const error: String | undefined = await refreshAllUsers();
      if (error) {
        setRefreshError(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <View>
      {/* TODO: Navigation bar */}
      {/* TODO: Search bar */}
      <UsersList users={users} error={refreshError} />
    </View>
  );
};

export default Users;
