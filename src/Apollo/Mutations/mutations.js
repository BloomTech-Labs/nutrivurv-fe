import { gql } from "apollo-boost";

const CREATE_USER = gql`
  mutation createUser($type: String!) {
    createUser(name: $type, email: $type, password: $type) {
      user {
        id
        name
      }
    }
  }
`;

const LOGIN = gql`
  mutation login($type: String!) {
    login(email: $type, password: $type) {
      token
      user {
        id
        name
      }
    }
  }
`;

module.exports = {
  CREATE_USER,
  LOGIN,
};
