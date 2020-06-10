import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: "https://protected-forest-13208.herokuapp.com/",
})

export default client;