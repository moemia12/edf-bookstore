import BookSearchApiClient from "./BookSearchApiClient.js";
import FetchBookSearchApiClient from "./FetchBookSearchApiClient.js";
import AxBookSearchApiClient from "./AxBookSearchApiClient.js"

const client = BookSearchApiClient();
const booksByShakespear = client.getBooksByAuthor("Shakespear", 10);


// Fetch Method -----------------------------------------------------
const fetchClient = new FetchBookSearchApiClient("json", "http://api.book-seller-example.com");

// Author Query
const fetchedBooksByShakespear = fetchClient.getBooksByAuthor("Shakespeare", 10)
  .then(books => {
    console.log(books);
  })
  .catch(error => {
    console.error(error);
  });

// Publisher Query
const fetchedPublishedBooks = fetchClient.getBooksByPublisher("Shakespeares Publisher", 10)
.then(books => {
  console.log(books);
})
.catch(error => {
  console.error(error);
});

// Axios Method -----------------------------------------------------
const axiosClient = new AxBookSearchApiClient("json", "http://api.book-seller-example.com")

// Author Query
const axBooksByShakespear = axiosClient.getBooksByAuthor("Shakespeare", 10)
  .then(books => {
    console.log(books);
  })
  .catch(error => {
    console.error(error);
  });

// Publisher Query
const axPublishedBooks = axiosClient.getBooksByPublisher("Shakespeares Publisher", 10)
.then(books => {
  console.log(books);
})
.catch(error => {
  console.error(error);
});