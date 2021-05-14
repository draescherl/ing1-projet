import axios from 'axios';
const FileDownload = require('js-file-download');

const url = 'api/retombees/';

class RetombeeService {

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

  static postFile(formData) {
    return axios.post('api/files', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  static getFile(filename) {
    const url_test = `api/files/retombee/${filename}`;
    axios.get(url_test, { responseType: 'blob' }).then((response) => {
      FileDownload(response.data, filename);
    });
  }

  static post(data) {
    return axios.post(url, {
      publi_date: data.publi_date,
      title: data.title,
      cp_code: data.cp_code,
      type: data.type,
      departement: data.departement,
      source: data.source,
      theme: data.theme,
      conotation: data.conotation,
      pdf_path: data.pdf_path,
      hyperlink: data.hyperlink
    });
  }

  static delete(id) {
    return axios.delete(`${url}${id}`);
  }

  static update(id, date, title, code, type, departement, source, theme, conotation, path, hyperlink) {
    return axios.put(`${url}${id}`, {
      date, title, code, type, departement, source, theme, conotation, path, hyperlink
    });
  }

}

export default RetombeeService;