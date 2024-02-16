const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers')
const mongoose = require('mongoose');

// Apollo server
async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    mongoose.set('strict', true); 
    await mongoose.connect('mongodb+srv://admin:admin123@cluster0.dqrno8h.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority');
    console.log('Update: Database is connected to the project.');
    const port = 3000;
    app.listen(port, () => console.log(`Server is up at port ${port}/graphql`));
}


startServer();
