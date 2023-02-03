import React, {useCallback, useEffect, useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import UserCard from '../../Components/Atoms/User/UserCard';
import {refreshAnUser} from '../../Services/Api/users';
import {State} from '../../Stores/Redux/reducers';
import User from '../../Types/User/User';

/**
 * @returns An user details
 */
const UserDetails = ({route}) => {
  /// Memoized User Id from the navigation
  const userId = useMemo(() => route.params.userId, [route.params.userId]);

  /**
   * The stored user data
   */
  const user = useSelector((state: State) =>
    (state.users?.list ?? []).find((u: User) => u.id === userId),
  );

  /**
   * Force refresh the user data
   */
  const refreshUserData = useCallback(async () => {
    const error: String | void = await refreshAnUser(userId);
    if (error) {
      // TODO: Error placeholder UI, state, toast... design choice!
    }
  }, [userId]);

  /**
   * Trigger a refreshAnUser when the component mount, to get the latest data
   */
  useEffect(() => {
    refreshUserData();
  }, [refreshUserData]);

  return (
    <SafeAreaView>
      <UserCard user={user} />
    </SafeAreaView>
  );
};

export default UserDetails;
