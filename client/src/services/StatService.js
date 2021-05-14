import axios from 'axios';

const url_dr = 'api/bilandr/';
const url_dep = 'api/bilandep/';
const url_month = 'api/bilanmonth/';
const url_date = 'api/dates/';
const url_utils = 'api/utils/';

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

  static departementToId(departement) {
    return new Promise((resolve, reject) => {
      axios.get(`${url_utils}departement-to-id/${departement}`).then(res => {
        let tmp = [];
        const data = res.data;

        // Here we loop through the response object and extract the data 
        Object.keys(data).forEach(index => tmp.push(data[index]));
        let id = tmp[0].id;

        resolve(id);
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



  static getCP_byDepartement(year, trimestre, departement) {
    return this.template(`${url_dep}communiques/${year}/${trimestre}/${departement}`);
  }

  static getRetombeesCP_byDepartement(year, trimestre, departement) {
    return this.template(`${url_dep}2/${year}/${trimestre}/${departement}/1`);
  }

  static getRetombees_byDepartement(year, trimestre, departement) {
    return this.template(`${url_dep}retombees/${year}/${trimestre}/${departement}`);
  }

  static getRetombeesConotation_byDepartement(year, trimestre, conotation, departement) {
    return this.template(`${url_dep}retombees/${year}/${trimestre}/${departement}/2/${conotation}`);
  }

  static getRetombeesType_byDepartement(year, trimestre, type, departement) {
    return this.template(`${url_dep}retombees/${year}/${trimestre}/${departement}/3/${type}`);
  }



  static getRetombeesConotation_byMonthAndDepartement(month, dep, conotation) {
    let year = new Date().getFullYear();
    return this.template(`${url_month}retombees/${year}/${month}/${dep}/1/${conotation}`);
  }
  
  static getRetombeesType_byMonthAndDepartement(month, dep, type) {
    let year = new Date().getFullYear();
    return this.template(`${url_month}retombees/${year}/${month}/${dep}/2/${type}`);
  }
  
  static getCP_byMonthAndDepartement(month, dep){
    let year = new Date().getFullYear();
    return this.template(`${url_month}communiques/${year}/${month}/${dep}`);
  }
  
  static getRetombeesCP_byMonthAndDepartement(month, dep) {
    let year = new Date().getFullYear();
    return this.template(`${url_month}2/${year}/${month}/${dep}/3`);
  }
  
  static getRetombeesThemes_byMonthAndDepartement(month, dep, theme) {
    let year = new Date().getFullYear();
    return this.template(`${url_month}retombees/${year}/${month}/${dep}/4/${theme}`);
  }
  
  static getRetombeesThemesConotation_byMonthAndDepartement(month, dep, theme, conotation) {
    let year = new Date().getFullYear();
    return this.template(`${url_month}retombees/${year}/${month}/${dep}/5/${conotation}/${theme}`);
  }

}

export default StatService;