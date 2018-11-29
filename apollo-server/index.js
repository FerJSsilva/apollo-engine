const { ApolloServer, gql } = require('apollo-server');

const books = [
    {
      title: 'Percy Jackson and the lightning thief',
      author: 'Ryik Riordan',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];
  
  const typeDefs = gql`
    type Book {
      title: String
      author: String
    }
  
    type Query {
      books: [Book]
    }
  `;

  const resolvers = {
    Query: {
      books: () => books,
    },
  };

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: "service:FerJSsilva-2372:0bGzWAYz7Pt7i3g3QVNVyw" //demo-engine api key
    }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
