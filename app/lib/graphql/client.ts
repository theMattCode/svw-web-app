import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: `${process.env.BACKEND_URL}/graphql`,
  headers: {
    authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
  },
});

const client = new ApolloClient({
  name: "svw-web-app-apollo-client",
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        keyFields: ["slug"],
      },
    },
  }),
  link: httpLink,
});

export default client;
