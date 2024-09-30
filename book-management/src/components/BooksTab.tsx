
import React, { useEffect, useState } from 'react';
import { useBooksContext } from '../components/context/BooksContext';
import useFetchBooks from '../hooks/useFetchBooks';
import BookCard from './BookCard';

const BooksTab: React.FC = () => {
  const { setBooks, collections, setCollections } = useBooksContext();
  const [query, setQuery] = useState('english');
  const books = useFetchBooks(query);

  useEffect(() => {
    setBooks(books);
  }, [books, setBooks]);

  const handleRateBook = (bookId: string, rating: number) => {
    console.log(`Rated book ${bookId} with rating ${rating}`);
   
  };

  const handleAddToCollection = (book: any) => {
    
    const bookExists = collections.some((item) => item.id === book.id);
    if (!bookExists) {
      setCollections((prevCollections) => [...prevCollections, book]);
      console.log(`Added book ${book.id} to collection`);
    } else {
      console.log(`Book ${book.id} is already in the collection`);
    }
  };

  return (
    <div>
      <div className='searchBar'>
        <input 
          type="text" 
          placeholder="Search for books..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
      </div>
      <div className="book-list">
        {books.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            onRate={handleRateBook} 
            onAddToCollection={handleAddToCollection} 
          />
        ))}
      </div>
    </div>
  );
};

export default BooksTab;
