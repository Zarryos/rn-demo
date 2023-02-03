import User from '../../../Types/User/User';
import {RESET_USERS, UPDATE_USERS} from '../types';

/**
 * Hard reset the users store with the specified array of Users
 *
 * @param users Array of Users to reset the store with
 * @returns
 */
const resetUsers = (users: [User]) => ({
  type: RESET_USERS,
  users,
});

/**
 * Update the stored data of a specific user
 *
 * @param user The User to update
 * @returns
 */
const updateUsers = (users: [User]) => ({
  type: UPDATE_USERS,
  users,
});

export default {
  resetUsers,
  updateUsers,
};
