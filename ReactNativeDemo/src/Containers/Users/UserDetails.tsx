import React, {useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import UsersList from '../../Components/Molecules/User/UsersList';
import {refreshAllUsers} from '../../Services/Api/users';
import {State} from '../../Stores/Redux/reducers';
import users from '../../Stores/Redux/reducers/users';
import User from '../../Types/User/User';

/**
 * @returns An user details
 */
const UserDetails = (props: {id: Number}) => {
  /**
   * The stored list of users
   */
  const user = useSelector((state: State) =>
    (state.users?.list ?? []).find((u: User) => u.id === props.id),
  );

  /**
   * Force refresh the list data
   */
  const refreshUserData = useCallback(async () => {
    const error: String | void = await refreshAnUser(props.id);
  }, [props.id]);

  /**
   * Trigger a refreshAllUsers when the component mount
   */
  useEffect(() => {
    refreshUserData();
  }, [refreshUserData]);

  return (
    <SafeAreaView>
      <UserCard userId={props.id} />
    </SafeAreaView>
  );
};

export default UserDetails;
