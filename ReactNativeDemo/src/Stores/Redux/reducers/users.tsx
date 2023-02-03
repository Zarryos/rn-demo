import User from '../../../Types/User/User';
import {RESET_USERS, UPDATE_USERS} from '../types';

const initialstate = {
  list: [],
};

type Action = {
  type: string;
  users: [User];
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case RESET_USERS:
      const users = action.users ?? [];

      return {
        ...state,
        list: users,
      };
    case UPDATE_USERS:
      const usersToUpdate = action.users ?? [];

      const updatedUsers = state.list.map((user: User) => {
        usersToUpdate.forEach((userToUpdate: User) => {
          if (userToUpdate.id === user.id) {
            return usersToUpdate;
          }
        });
        return user;
      });
      return {
        ...state,
        list: updatedUsers,
      };
    default:
      return state;
  }
};
