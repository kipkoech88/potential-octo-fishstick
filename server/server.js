import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

const typeDefs =`#graphql
    type Book{
        title: String,
        author: String
    },
    type Query{
        books: [Book]
    },
    type Mutations{
        addBook(title: String, author: String): Book
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

//creating server instance
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const {url} = await startStandaloneServer(server,{
    listen:{port: 4000},
});

console.log(`Server ready at port ${url}`)