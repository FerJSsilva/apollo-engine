const { RESTDataSource } = require('apollo-datasource-rest');

class ApiManager extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/';
  }

  async getPosts() {
    return this.get(`posts`);
  }

  async getPost(id) {
    return this.get(`posts/${id}`);
  }

  async postPost(post) {
    const newPost = {
        id: post.postInput.id,
        userId: post.postInput.userId,
        title: post.postInput.title,
        body: post.postInput.body,
    }

    return this.post(
      `posts`, // path
      newPost, // request body
    );
  }

  async getUsers() { 
    return this.get(`users/`);
  }

  async getUser(id) {
    return this.get(`users/${id}`);
  }

  async postUser(user) {
    const newUser = {
        id: user.userInput.id,
        name: user.userInput.name,
        username: user.userInput.username,
        email: user.userInput.email,
    }

    return this.post(
      `users`, // path
      newUser, // request body
    );
  }
}

module.exports = ApiManager;
