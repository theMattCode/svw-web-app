import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

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
  /*
  fetch: async function loggingFetch(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<Response> {
    console.dir(input);
    console.dir(init);
    const response = await fetch(input, init);
    return {
      ...response,
      async text() {
        const start = Date.now();
        const result = await response.text();
        console.log(JSON.parse(result));
        console.log(
          `${new Date().toISOString().slice(-13)} ⚙️ in ${
            Date.now() - start
          }ms (${result.length} bytes)`
        );
        return result;
      },
    };
  },
  */
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
