class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister (data) {
    return axios.post(`${this.BASE_URL}/characters`, data)
  }

  updateOneRegister (id, data) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, data)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)

  }
}
