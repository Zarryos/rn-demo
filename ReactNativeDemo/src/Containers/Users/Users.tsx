import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import UsersList from '../../Components/Molecules/User/UsersList';
import {refreshAllUsers} from '../../Services/Api/users';
import {State} from '../../Stores/Redux/reducers';

/**
 * @returns A rendered list of users with a search bar
 */
const Users = () => {
  /// State of the refresh error, if any
  const [refreshError, setRefreshError] = useState<String | void>();
  /// State of the refresh error, if any
  const [isRefreshingUsers, setIsRefreshingUsers] = useState<boolean>(false);

  /**
   * The stored list of users
   */
  const users = useSelector((state: State) => state.users?.list ?? []);

  /**
   * Force refresh the list data
   */
  const refreshData = useCallback(async () => {
    setIsRefreshingUsers(true);
    const error: String | void = await refreshAllUsers();
    setRefreshError(error);
    setIsRefreshingUsers(false);
  }, []);

  /**
   * Trigger a refreshAllUsers when the component mount
   */
  useEffect(() => {
    refreshData();
  }, [refreshData]);

  return (
    <SafeAreaView>
      {/* TODO: Search bar */}
      <UsersList
        users={users}
        error={refreshError}
        refreshing={isRefreshingUsers}
        onRefresh={refreshData}
      />
    </SafeAreaView>
  );
};

export default Users;
