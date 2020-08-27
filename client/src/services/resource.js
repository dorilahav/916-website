import axios from 'axios';

export default class ResourceService {
  constructor(url) {
    this.axios = axios.create({
      baseURL: url
    });
  }

  async getAll() {
    return await this.axios.get('/')
      .then(({data}) => data);
  }

  async getById(id) {
    return await this.axios.get(`/${id}`)
      .then(({data}) => data);
  }

  async insert(entity) {
    return await this.axios.post('/', entity)
      .then(({data}) => data);
  }

  async deleteById(id) {
    return await this.axios.delete(`/${id}`)
      .then(({data}) => data);
  }

  async edit(id, edits) {
    return await this.axios.patch(`/${id}`, edits)
      .then(({data}) => data);
  }

  async replace(id, newEntity) {
    return await this.axios.put(`/${id}`, newEntity)
      .then(({data}) => data);
  }
}