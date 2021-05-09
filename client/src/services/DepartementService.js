import axios from 'axios';

const url = 'api/departements/';

class DepartementService {

  static getAll() {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        let to_return = [];
        const data = res.data;

        // Here we loop through the response object and extract the data 
        Object.keys(data).forEach(index => to_return.push(data[index]));

        resolve(to_return);
      }).catch(err => reject(err));
    });
  }

  static post(num) {
    return axios.post(url, {
      num: num
    });
  }

  static delete(id) {
    return axios.delete(`${url}${id}`);
  }

  static update(id, num) {
    return axios.put(`${url}${id}`, {
      num: num
    });
  }

}

export default DepartementService;