import axios from 'axios';

const url = 'api/sources';

class SourceService {

  static getAll(type_id, departement_id) {
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

        // Here we loop through the response object and extract the number 
        Object.keys(data).forEach(index => { to_return.push(data[index].name); });

        resolve(to_return);
      })
        .catch(err => {
          reject(err);
        });
    });
  }

  static post(text) {
    return axios.post(url, {
      text: text
    });
  }

  static delete(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default SourceService;