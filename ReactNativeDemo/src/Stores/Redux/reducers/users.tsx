import User from '../../../Types/User/User';
import {RESET_USERS} from '../types';

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
    default:
      return state;
  }
};
