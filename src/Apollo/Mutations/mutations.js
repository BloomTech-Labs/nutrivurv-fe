import  gql  from "graphql-tag";


export const CREATE_USER = gql`
  mutation createUser($data: CreateUserInput!) {
    createUser(data: { name: String, email: String, password: String }) {
      user{
        id,
        name
      },
      token
    }
  }
`;

export const LOGIN = gql`
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

