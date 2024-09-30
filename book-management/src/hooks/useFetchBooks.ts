import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchBooks = (query: string) => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    if (query) {
      const fetchBooks = async () => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        setBooks(response.data.items || []);
      };

      fetchBooks();
    }
  }, [query]);

  return books;
};

export default useFetchBooks;
