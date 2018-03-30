import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import models from './models';

const app = express();

function startApp(port) {
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}/graphql`);
    });
}

models.sequelize.sync()
    .then(() => startApp(3000))
    .catch(error => {
        throw new Error(error);
    });

app.use('/graphql', graphqlHTTP({
    schema,
    pretty: true,
    graphiql: true
}));

