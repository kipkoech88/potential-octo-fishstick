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
`;

//data
const books = [
    {
        title: "DDOS",
        author: "Hosea"
    },
    {
        title: "Ping of Death",
        author: "Kipngetich"
    }
]


//resolvers
const resolvers ={
    Query:{
        books: ()=> books
    }
};

