import User from '../../../Types/User/User';
import {RESET_USERS} from '../types';

/**
 * Hard reset the users store with the specified array of Users
 *
 * @param newUsers Array of Users
 * @returns
 */
const resetUsers = (users: [User]) => ({
  type: RESET_USERS,
  users,
});

export default {
  resetUsers,
};
