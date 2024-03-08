// src/app.ts
require('dotenv').config();
import express, { Application} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'; 
import cors from 'cors'; //npm install --save @types/cors

import userRoutes from './routers/user_routes'; 
import blogRoutes from './routers/blog_routes'; 
import messageRoutes from './routers/msg_routes'; 
import commentsRoutes from './routers/comments_routes';




const app: Application = express();
import session from 'express-session';
import cookieParser from 'cookie-parser';
const PORT: number = 3000;
// const MONGODB_URI: string = "mongodb://localhost:27017/TSPortifo";
const MONGODB_URI: string = process.env.MONGO_CONNECT_STRING!;
import MongoStore from 'connect-mongo';



// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



// sessions and cookies

app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store:MongoStore.create({mongoUrl:MONGODB_URI})

  }));



// swagger
const { swaggerUi, swaggerDocs } = require('./docs/swagger');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



 
// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server once connected to the database
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/api/v1', userRoutes); // Using userRoutes for '/users' route
app.use('/api/v1', blogRoutes); // Using blogRoutes for '/blogs' route
app.use('/api/v1', messageRoutes); // Using messageRoutes for '/messages' route
app.use('/api/v1', commentsRoutes); // Using commentsRoutes for '/comments' route


export default app;



