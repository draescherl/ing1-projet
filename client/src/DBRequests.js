import axios from 'axios';

const base_url = 'http://localhost:5000/api/';

class DBRequests {
  
  static async get(item) {
    const url = base_url + item.toString() + '/';
    const res = await axios.get(url);
    const data = res.data;
    try {
      return data;
    } catch (err) {
      return err;
    }
  }

  static post(item, text) {
    const url = base_url + item.toString() + '/';
    return axios.post(url, {
      text: text
    });
  }

  static delete(item, id) {
    const url = base_url + item.toString() + '/';
    return axios.delete(`${url}${id}`);
  }
}

export default DBRequests;