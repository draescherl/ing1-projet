import axios from 'axios';

const url = 'api/communiques/';

class CommuniqueService {

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

  static post(data) {
    return axios.post(url, {
      publi_date: data.publi_date,
      title: data.title,
      cp_code: data.cp_code,
      type: data.type,
      departement: data.departement,
      theme: data.theme,
      pdf_path: data.pdf_path,
      hyperlink: data.hyperlink
    });
  }

  static delete(id) {
    return axios.delete(`${url}${id}`);
  }

  static update(id, date, title, code, type, departement, theme, path, hyperlink) {
    return axios.put(`${url}${id}`, {
      date, title, code, type, departement, theme, path, hyperlink
    });
  }

}

export default CommuniqueService;