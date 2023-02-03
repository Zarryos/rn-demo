import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import SearchBar from '../../Components/Atoms/Search/SearchBar';
import UsersList from '../../Components/Molecules/User/UsersList';
import {refreshAllUsers} from '../../Services/Api/users';
import {State} from '../../Stores/Redux/reducers';
import User from '../../Types/User/User';

/**
 * @returns A rendered list of users with a search bar
 */
const Users = () => {
  /// State of the refresh error, if any
  const [refreshError, setRefreshError] = useState<String | void>();
  /// State of the refresh error, if any
  const [isRefreshingUsers, setIsRefreshingUsers] = useState<boolean>(false);
  /// Searched text
  const [searchedUserText, setSearchedUserText] = useState<String | void>();

  /**
   * The stored list of users, filtered on the search
   */
  const users = useSelector((state: State) =>
    (state.users?.list ?? []).filter((user: User) => {
      if (!searchedUserText?.length) {
        return true;
      }

      // Note: I've worked with a regex here (no search api available), but usually that's a debounced api fetch
      const regex = new RegExp('^.*' + searchedUserText + '.*$');
      return (
        regex.test(user.name.toString()) || regex.test(user.username.toString())
      );
    }),
  );

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
      <SearchBar onChange={setSearchedUserText} />
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
