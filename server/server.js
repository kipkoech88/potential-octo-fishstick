import {ApolloServer} from '@apollo/server';
import {StandaloneServer} from '@apollo/server/standalone';

const typeDefs = `#graphql
    type Book{
        title: String,
        author: String
    },
    type Query{
        books: [Book]
    }
`