import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  fetchOptions: {
    next: {
      /**
       * Available options:
       * { cache: 'force-cache' }: Generates statically like getStaticProps.
       * { cache: 'no-store'}: Generates server-side upon every request like getServerSideProps.
       * { revalidate: 20 }: BROKEN!! Generates statically but revalidates every 20 seconds
       */
    },
  },
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
  },
});

const responseLogger = new ApolloLink((operation, forward) => {
  return forward(operation).map((result) => {
    const context = operation.getContext();
    console.dir(context.request);
    console.dir(context.response);
    return result;
  });
});

const graphqlClient = new ApolloClient({
  name: "svw-web-app-apollo-client",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
  link: ApolloLink.from([responseLogger, httpLink]),
});

export default graphqlClient;
