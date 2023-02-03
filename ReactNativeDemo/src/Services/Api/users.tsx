import {baseUrl} from './constants';
import store from '../../Stores/Redux';
import {resetUsers, updateUsers} from '../../Stores/Redux/actions';
import User from '../../Types/User/User';

/// Create

/// Read
/**
 * Get users from the placeholder api, reset the users store from the new data
 * @returns Error, if any
 */
export async function refreshAllUsers(): Promise<String | void> {
  const response = await fetch(baseUrl + '/users/');

  let error: String | undefined;
  const users: [User] | undefined = await response.json().catch(e => {
    error = e;
  });

  if (error) {
    return error;
  }

  if (users?.length) {
    // Note: Only reseting users if we got some, that's a debatable design choise
    store.dispatch(resetUsers.resetUsers(users));
  }
}

/**
 * Get an user from the placeholder api, update this user data in the store
 * @returns Error, if any
 */
export async function refreshAnUser(id: Number): Promise<String | void> {
  const response = await fetch(baseUrl + '/users/' + id.toString());

  let error: String | undefined;
  const user: User | undefined = await response.json().catch(e => {
    error = e;
  });

  if (error) {
    return error;
  }

  if (user) {
    // Note: Only reseting the user if we got one, that's a debatable design choise
    store.dispatch(updateUsers.updateUsers([user]));
  }
}

/// Update

/// Delete
