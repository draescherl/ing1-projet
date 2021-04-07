import axios from 'axios';

const base_url = 'http://localhost:5000/api/';

class DBRequests {
  
  static async get(item) {
    const url = base_url + item.toString() + '/';
    const res = await axios.get(url);
    try {
      return res.data;
    } catch (err) {
      return err;
    }
  }

  static insertTheme(item, text) {
    const url = base_url + item.toString() + '/';
    return axios.post(url, {
      text: text
    });
  }

  static deleteTheme(item, id) {
    const url = base_url + item.toString() + '/';
    return axios.delete(`${url}${id}`);
  }
}

export default DBRequests;