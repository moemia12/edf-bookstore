class FetchBookSearchApiClient {
    constructor(format, apiUrl) {
      this.format = format;
      this.apiUrl = apiUrl;
    }
  
    // Query 1 - Author
    async getBooksByAuthor(authorName, limit) {
      try {
        const response = await fetch(`${this.apiUrl}/by-author?q=${authorName}&limit=${limit}&format=${this.format}`);
  
        if (response.ok) {
          const data = await (this.format === 'json' ? response.json() : response.text());
          return this.parseResponse(data);
        } else {
          throw new Error(`Request failed. Returned status of ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    }

    // Query 2 - Publisher
    async getBooksByPublisher(publisherName, limit) {
      try {
        const response = await fetch(`${this.apiUrl}/by-publisher?q=${publisherName}&limit=${limit}&format=${this.format}`);
  
        if (response.ok) {
          const data = await (this.format === 'json' ? response.json() : response.text());
          return this.parseResponse(data);
        } else {
          throw new Error(`Request failed. Returned status of ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    // Create a function to parseResponse so each query can use seperately 
    parseResponse(data) {
      if (this.format === 'json') {
        return data.map(item => ({
          title: item.book.title,
          author: item.book.author,
          isbn: item.book.isbn,
          quantity: item.stock.quantity,
          price: item.stock.price,
        }));
      } else if (this.format === 'xml') {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const items = xml.documentElement.childNodes;
        const result = [];
  
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          result.push({
            title: item.childNodes[0].childNodes[0].nodeValue,
            author: item.childNodes[0].childNodes[1].nodeValue,
            isbn: item.childNodes[0].childNodes[2].nodeValue,
            quantity: item.childNodes[1].childNodes[0].nodeValue,
            price: item.childNodes[1].childNodes[1].nodeValue,
          });
        }
  
        return result;
      }
    }
  }
  
  module.exports = FetchBookSearchApiClient;
  