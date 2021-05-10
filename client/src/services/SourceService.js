import axios from 'axios';

const url = 'api/sources/';

class SourceService {

  static getAll_with_TypeDepartement(type_id, departement_id) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        headers: {
          'content-type': 'application/json'
        },
        params: {
          type_id,
          departement_id
        }
      }).then(res => {
        let to_return = [];
        const data = res.data;

        // Here we loop through the response object and extract the data 
        Object.keys(data).forEach(index => to_return.push(data[index]));

        resolve(to_return);
      })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        let to_return = [];
        const data = res.data;

        // Here we loop through the response object and extract the data 
        Object.keys(data).forEach(index => to_return.push(data[index]));

        resolve(to_return);
      }).catch(err => {
        reject(err);
      });
    });
  }

  static post(name, departement, type) {
    return axios.post(url, {
      name, departement, type
    });
  }

  static delete(id) {
    return axios.delete(`${url}${id}`);
  }
  
  static update(id, name, type, departement) {
    return axios.put(`${url}${id}`, {
      name, type, departement
    });
  }
}

export default SourceService;