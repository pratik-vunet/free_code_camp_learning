import React, { createContext, useContext, useState } from 'react';
import { Book } from '../types'; 
type BooksContextType = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>; 
  collections: Book[];
  setCollections: React.Dispatch<React.SetStateAction<Book[]>>;
  rateBook: (bookId: string, rating: number) => void;
 
};

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [collections, setCollections] = useState<Book[]>([]);

  const rateBook = (bookId: string, rating: number) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === bookId ? { ...book, rating } : book
      )
    );
  };

  return (
    <BooksContext.Provider value={{ books, setBooks, collections, setCollections, rateBook }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error('useBooksContext must be used within a BooksProvider');
  }
  return context;
};

export default BooksProvider;
