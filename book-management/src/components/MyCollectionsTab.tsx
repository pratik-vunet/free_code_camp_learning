// src/components/MyCollectionsTab.tsx
import React, { useState } from 'react';
import { useBooksContext } from '../components/context/BooksContext';
import BookCard from './BookCard';
import BookForm from './BookForm'; // Existing form for adding books
import BookEditForm from './BookEditForm'; // Import the new edit form
import { Book } from './types';

const MyCollectionsTab: React.FC = () => {
  const { collections, setCollections } = useBooksContext();
  const [editingBook, setEditingBook] = useState<Book | null>(null); // State for the book being edited

  const handleDeleteBook = (bookId: string) => {
    const updatedCollections = collections.filter(book => book.id !== bookId);
    setCollections(updatedCollections);
  };

  const handleAddBook = (newBook: Book) => {
    setCollections(prevCollections => [...prevCollections, newBook]);
    console.log(`Added new book ${newBook.id} to collection`);
  };

  const handleEditBook = (updatedBook: Book) => {
    const updatedCollections = collections.map(book =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setCollections(updatedCollections);
    setEditingBook(null); // Close the edit form
  };

  const handleRateBook = (bookId: string, rating: number) => {
    const updatedCollections = collections.map(book =>
      book.id === bookId ? { ...book, rating } : book
    );
    setCollections(updatedCollections);
    console.log(`Rated book ${bookId} with rating ${rating}`);
  };

  return (
    <div>
      <h2>My Collections</h2>
      <BookForm onAdd={handleAddBook} /> {/* Existing form for adding books */}

      {editingBook && ( // Render edit form if a book is being edited
        <BookEditForm 
          book={editingBook} 
          onSubmit={handleEditBook} 
          onCancel={() => setEditingBook(null)} 
        />
      )}

      <div className="collection-list">
        {collections.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            onDelete={handleDeleteBook} 
            onEdit={() => setEditingBook(book)} // Set the book for editing
            onRate={handleRateBook} // Pass down the onRate function
          />
        ))}
      </div>
    </div>
  );
};

export default MyCollectionsTab;
