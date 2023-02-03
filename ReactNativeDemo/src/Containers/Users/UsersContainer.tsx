import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import UsersList from '../../Components/Molecules/User/UsersList';
import {refreshAllUsers} from '../../Services/Api/users';
import {State} from '../../Stores/Redux/reducers';

const Users = () => {
  const [refreshError, setRefreshError] = useState<String | undefined>();

  const users = useSelector((state: State) => state.users?.list ?? []);

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
