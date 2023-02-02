import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  fetchOptions: {
    next: {
      /**
       * Available options:
       * { cache: 'force-cache' }: Generates statically like getStaticProps.
       * { cache: 'no-store'}: Generates server-side upon every request like getServerSideProps.
       * { revalidate: 20 }: Generates statically but revalidates every 20 seconds
       */
      revalidate: 20,
    },
  },
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
  },
});

const graphqlClient = new ApolloClient({
  name: "svw-web-app-apollo-client",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
  link: httpLink,
});

export default graphqlClient;
