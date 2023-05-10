import FetchBookSearchApiClient from '../src/FetchBookSearchApiClient';

describe('Book Search API Clients', () => {
  const apiClient = new FetchBookSearchApiClient('json', 'http://api.book-seller-example.com');

  test('getBooksByAuthor returns an array of books for a valid author and limit', async () => {
    const authorName = 'Shakespeare';
    const limit = 10;
    const books = await apiClient.getBooksByAuthor(authorName, limit);

    expect(Array.isArray(books)).toBe(true);
    expect(books.length).toBe(limit);

    books.forEach(book => {
      expect(book.title).toBeDefined();
      expect(book.author).toBeDefined();
      expect(book.isbn).toBeDefined();
      expect(book.quantity).toBeDefined();
      expect(book.price).toBeDefined();
    });
  });

  test('getBooksByAuthor throws an error for an invalid author', async () => {
    const authorName = 'invalid-author';
    const limit = 10;

    await expect(apiClient.getBooksByAuthor(authorName, limit)).rejects.toThrow();
  });

  test('getBooksByAuthor throws an error for an invalid limit', async () => {
    const authorName = 'Shakespeare';
    const limit = -1;

    await expect(apiClient.getBooksByAuthor(authorName, limit)).rejects.toThrow();
  });

  test('getBooksByPublisher returns an array of books for a valid publisher and limit', async () => {
    const publisherName = 'Shakespeares Publisher';
    const limit = 10;
    const books = await apiClient.getBooksByPublisher(publisherName, limit);

    expect(Array.isArray(books)).toBe(true);
    expect(books.length).toBe(limit);

    books.forEach(book => {
      expect(book.title).toBeDefined();
      expect(book.author).toBeDefined();
      expect(book.isbn).toBeDefined();
      expect(book.quantity).toBeDefined();
      expect(book.price).toBeDefined();
    });
  });

  test('getBooksByPublisher throws an error for an invalid publisher', async () => {
    const publisherName = 'invalid-publisher';
    const limit = 10;

    await expect(apiClient.getBooksByPublisher(publisherName, limit)).rejects.toThrow();
  });

  test('getBooksByPublisher throws an error for an invalid limit', async () => {
    const publisherName = 'Shakespeares Publisher';
    const limit = -1;

    await expect(apiClient.getBooksByPublisher(publisherName, limit)).rejects.toThrow();
  });


})