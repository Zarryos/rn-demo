import User from '../../../Types/User/User';
import {RESET_USERS} from '../types';

const initialstate = {
  users: {},
};

type Action = {
  type: string;
  users?: [User];
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case RESET_USERS:
      const users = action.users ?? [];

      return {
        ...state,
        users,
      };
    default:
      return state;
  }
};
