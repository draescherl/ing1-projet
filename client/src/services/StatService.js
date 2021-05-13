import axios from 'axios';

const url_dr = 'api/bilandr/';
// const url_dep = 'api/bilandep/';
// const url_month = 'api/bilan_month/';
const url_date = 'api/dates/';

class StatService {

  static template(url) {
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

  static getOldestYear() {
    return new Promise((resolve, reject) => {
      axios.get(`${url_date}min`).then(res => {
        let tmp = [];
        const data = res.data;

        // Here we loop through the response object and extract the data 
        Object.keys(data).forEach(index => tmp.push(data[index]));
        let year = tmp[0].date.split('-')[0];

        resolve(year);
      }).catch(err => {
        reject(err);
      });
    });
  }

  static getCP(year, trimestre) {
    return this.template(`${url_dr}communiques/${year}/${trimestre}`);
  }

  static getRetombeesCP(year, trimestre) {
    return this.template(`${url_dr}2/${year}/${trimestre}/1`);
  }

  static getRetombees(year, trimestre) {
    return this.template(`${url_dr}retombees/${year}/${trimestre}`);
  }
  
  static getRetombeesConotation(year, trimestre, conotation) {
    return this.template(`${url_dr}retombees/${year}/${trimestre}/2/${conotation}`);
  }
  
  static getRetombeesType(year, trimestre, type) {
    return this.template(`${url_dr}retombees/${year}/${trimestre}/3/${type}`);
  }

}

export default StatService;