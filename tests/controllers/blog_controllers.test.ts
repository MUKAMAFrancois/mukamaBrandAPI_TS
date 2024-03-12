require('dotenv').config();
import request from 'supertest';
import app from '../../src/app';
import Blog from '../../src/models/Blog';
import User from '../../src/models/User';
import jwt from 'jsonwebtoken';

describe('Blog Controller', () => {
  const testUser = {
    username: 'testUser',
    email: 'testUser@test.com',
    password: 'testPassword123',
    userRole: 'admin',
  };

  const testBlog = {
    title: 'Test Blog',
    content: 'Test Content',
    imageURL: 'https://test-image.com/image.jpg'
  };

  let createdBlog: any;
  let createdUser: any;

  beforeAll(async () => {
    // Create a test user
    const user = new User(testUser);
    await user.save();
    createdUser = user;
    const blog = new Blog(testBlog);
    createdBlog = await blog.save();
  });

  afterAll(async () => {
    // Clean up test data
    await User.deleteMany({});
    await Blog.deleteMany({});
  });

  // Manually generate token
  const token = jwt.sign({id:createdUser._id}, process.env.JWT_SECRET!);

  describe('createBlog', () => {
    it('creates a new blog and returns a 201 status code', async () => {
      const newBlog = {
        title: 'New Test Blog',
        content: 'New Test Content',
        imageURL: 'https://test-image.com/new-image.jpg',
      };
      const res = await request(app)
        .post('/blogs')
        .set('Authorization', `Bearer ${token}`) // Use the generated token
        .send(newBlog)
        .expect(201);

      expect(res.body.message).toEqual('Blog created successfully');
      expect(res.body.blog.title).toEqual(newBlog.title);
    });

    it('returns a 400 status code if the request body is missing required fields', async () => {
      const res = await request(app)
        .post('/blogs')
        .set('Authorization', `Bearer ${token}`)// Use the generated token
        .send({})
        .expect(400);

      expect(res.body.message).toEqual('title, content, and imageURL are required');
    });
  });

  describe('getAllBlogs', () => {
    it('returns a list of blogs and a 200 status code', async () => {
      const res = await request(app)
        .get('/blogs')
        .expect(200);

      expect(Array.isArray(res.body.blogs)).toBe(true);
      expect(res.body.blogs.length).toBeGreaterThan(0);
    });
  });

  describe('getBlogById', () => {
    it('returns a blog by id and a 200 status code', async () => {
      const res = await request(app)
        .get(`/blogs/${createdBlog._id}`)
        .expect(200);

      expect(res.body.blog.title).toEqual(createdBlog.title);
    });

    it('returns a 404 status code if the blog id does not exist', async () => {
      const nonExistentId = '60b8842b48e9e027dca930b0'; // Some non-existent ID
      const res = await request(app)
        .get(`/blogs/${nonExistentId}`)
        .expect(400);

      expect(res.body.message).toEqual('Blog not found');
    });
  });
});
