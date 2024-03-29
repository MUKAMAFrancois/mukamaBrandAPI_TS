

## Project Description

This simple project, offers functionalities for creating new blog posts, viewing existing posts, commenting on posts, and interacting with posts through likes and dislikes. User authentication ensures that only authenticated users can perform certain actions such as creating or deleting posts.

## Features

- User registration and login
- Create, read, update, and delete blog posts
- Commenting on blog posts
- Liking and disliking blog posts
- User authentication and authorization

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- TypeScript

## Installation


1. Install dependencies: `npm install`



## Routes

- **POST /register**: Register a new user
- **POST /login**: Login with existing credentials
- **POST /blogs**: Create a new blog post
- **GET /blogs**: Get all blog posts
- **GET /blogs/:id**: Get a specific blog post by ID
- **PUT /blogs/:id**: Update a blog post by ID
- **DELETE /blogs/:id**: Delete a blog post by ID
- **POST /comments/:blogId**: Create a new comment on a blog post
- **GET /comments/:blogId**: Get all comments for a specific blog post
- **DELETE /comments/:id**: Delete a comment by ID
- **POST /blogs/:blogId/like**: Like a blog post
- **POST /blogs/:blogId/dislike**: Dislike a blog post

## Contributing

Contributions are welcome! If you encounter any bugs, have suggestions, or want to contribute new features, please open an issue or submit a pull request.

#   m u k a m a B r a n d A P I _ T S 
 
 
