interface Address {
  city: String;
  geo: {longitude: String; latitude: String};
  street: String;
  suite: String;
  zipcode: String;
}

export default Address;
