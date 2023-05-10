# Javascript Code Test - EDF

Hello, 

The refactored code can be found in FetchBookSearchApi.js and used the example-client.js call the methods for each API client to perform queries.

- Changed from function to class to take advantage of OOP
- Offers the ability to use inheritance, allowing new objects to share common properties, methods and easily add other book seller API's or format 
- Improved usability, flexibility and readability 
- Using modern features such as Promises, async/await, and fetch instead of XMLHttpRequest
- Handles different payloads by abstracting response parsing logic into a separate function
- Implementing query types by adding additional methods for each query type, such as getBooksByPublisher, getBooksByYearPublished
- Testing using Jest by unit testing each method and mocking the fetch function to return sample data


Axios is also a good tool for this as it removes the need to parse JSON code. I've included another refactored file which makes use of Axios instead of Fetch/ XMLHttp
It can be found in AxBookSearchApiClient.js and its methods are called in example-client.js

//---------------------------------------------------------------------------------------------------------//

`BookSearchApiClient` is a simple class that makes a call to a http API to retrieve a list of books and return them.

You need to refactor the `BookSearchApiClient` class, and demonstate in `example-client.js` how it would be used. Refactor to what you consider to be production ready code. You can change it in anyway you would like and can use javascript or typescript.

Things you will be asked about:

1. How could you easily add other book seller APIs in the the future
2. How woud you manage differences in response payloads between differnt APIs without needing to make future changes to whatever code you have in example-client.js
3. How would you implement different query types for example: by publisher, by year published etc
4. How your code would be tested
