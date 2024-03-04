const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'API for managing blogs, users, comments, and likes',
      contact: {
        name: 'Coding',
        url: 'https://coding.com',
        email: 'coding@yahoo.fr',
      },
    },
    servers: [
      {
        url: 'http://localhost:5050/',
      },
    ],
    securityDefinitions: {
      BearerAuth: {
        type: "apiKey",
        scheme: "bearer",
        name: "Authorization",
        in: "header",
        bearerFormat: "JWT",
        description: 'Enter JWT token in the format \'Bearer <token>\''
      }
    },
    security: [{ BearerAuth: [] }],
  },
  apis: ['./routers/*.js'],
  
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerDocs,
};
