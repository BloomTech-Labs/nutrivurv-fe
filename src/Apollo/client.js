import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: "https://git.heroku.com/protected-forest-13208.git",
})

export default client;