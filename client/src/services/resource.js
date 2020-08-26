import axios from 'axios';

export default class ResourceService {
  constructor(url) {
    this.axios = axios.create({
      baseURL: url
    });
  }

  #parseEntity(rawEntity) {
    rawEntity.prototype.sendAction = async (action) =>
      this.axios.post(`/${action}`)
        .then(({data}) => data);
  }

  async getAll() {
    return await this.axios.get('/')
      .then(({data}) => data.map(this.#parseEntity));
  }

  async getById(id) {
    return await this.axios.get(`/${id}`)
      .then(({data}) => this.#parseEntity(data));
  }

  async create(entity) {
    return await this.axios.post('/', entity)
      .then(({data}) => this.#parseEntity(data));
  }

  async deleteById(id) {
    return await this.axios.delete(`/${id}`)
      .then(({data}) => data);
  }

  async edit(id, edits) {
    return await this.axios.patch(`/${id}`, edits)
      .then(({data}) => this.#parseEntity(data));
  }

  async replace(id, newEntity) {
    return await this.axios.put(`/${id}`, newEntity)
      .then(({data}) => this.#parseEntity(data));
  }

  async sendAction(action) {
    return await this.axios.post(`/${action}`)
      .then(({data}) => data);
  }
}