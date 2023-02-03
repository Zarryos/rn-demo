import Address from '../Location/Address';

interface User {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: Address;
  phone: String;
}

export default User;
