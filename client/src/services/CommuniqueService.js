import axios from 'axios';

const url = 'api/communiques';

class CommuniqueService {

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

}

export default CommuniqueService;