import Axios from 'axios';
//console.log("teste pessoas");
const RESOURCE_NAME = '/pessoas';
 
export default {
  getAll() {
    return Axios.get('/lista');
  },
 
  get(id) {
    return Axios.get(`/encontrar/${id}`);
  },
 
  create(data) {
    console.log("entrou em create pessoas");
    return Axios.post('/cadastro', data);
  },
 
  update(id, data) {
    return Axios.put(`/update/${id}`, data);
  },
 
  delete(id) {
    return Axios.delete(`/delete/${id}`);
  }
};