import axios from 'axios';

const url = 'api/types';

class TypeService {

  static getAll() {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        let to_return = [];
        const data = res.data;

        // Here we loop through the response object and extract the data 
        Object.keys(data).forEach(index => to_return.push(data[index].name));

        resolve(to_return);
      }).catch(err => reject(err));
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

export default TypeService;