import axios from 'axios';

const url = 'api/retombees';

class RetombeeService {

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

}

export default RetombeeService;