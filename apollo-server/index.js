const { ApolloServer, gql } = require('apollo-server');
const ApiManager = require('./datasource/ApiManager');

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
    type Post {
      id: ID
      userId: ID
      title: String
      body: String
    }

    type User {
      id: ID
      name: String
      username: String
      email: String
    }
  
    type Query {
      posts: [Post]
      post(id: ID!): Post
      users: [User]
      user(id: ID!): User
    }
  `;

  const resolvers = {
    Query: {
      posts: async (_source, _args, { dataSources }) => {
        return dataSources.ApiManager.getPosts();
      },
      post: async (_source, args, { dataSources }) => {
        return dataSources.ApiManager.getPost(args.id);
      },
      users: async (_source, _args, { dataSources }) => {
        return dataSources.ApiManager.getUsers();
      },
      user: async (_source, args, { dataSources }) => {
        return dataSources.ApiManager.getUser(args.id);
      },
    },
  };

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
        ApiManager: new ApiManager(),
    }
  },
  engine: {
    apiKey: "service:FerJSsilva-2372:0bGzWAYz7Pt7i3g3QVNVyw" //demo-engine api key
    }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
