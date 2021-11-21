import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
      removeBook(bookId: $bookId) {
        _id
        authors
        description
        title
        image
      }
  }
  `;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: ID!) {
      saveBook(bookId: $bookId) {
          _id
          authors
          description
          title
          image
      }
  }
`;