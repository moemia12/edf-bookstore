import { get } from "axios";
import { parseStringPromise } from "xml2js";

class AxBookSearchApiClient {
  constructor(format, apiUrl) {
    this.format = format;
    this.apiUrl = apiUrl;
  }

  async getBooksByAuthor(authorName, limit) {
    try {
        const response = await axios.get(`${this.apiUrl}/by-author?q=${authorName}&limit=${limit}&format=${this.format}`);
        // Axios has built in parsing feature for JSON
        if (response.status === 200) {
          let data = response.data;
            
          // Parsing for XML using xml2js library
          if (this.format === "xml") {
            data = await xml2js.parseStringPromise(data);
          }
  
          return data;
        } else {
          throw new Error(`Request failed. Returned status of ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
  }

  async getBooksByPublisher(publisherName, limit) {
    try {
        const response = await axios.get(`${this.apiUrl}/by-author?q=${authorName}&limit=${limit}&format=${this.format}`);
  
        if (response.status === 200) {
          let data = response.data;
  
          if (this.format === "xml") {
            data = await xml2js.parseStringPromise(data);
          }
  
          return data;
        } else {
          throw new Error(`Request failed. Returned status of ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
  }
}

export default AxBookSearchApiClient;
