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

  async getUsers() {
    return this.get(`users/`);
  }

  async getUser(id) {
    return this.get(`users/${id}`);
  }
}

module.exports = ApiManager;
