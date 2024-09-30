import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import Rating from './Rating';
import BookDrawer from './BookDrawer';
import { Book } from './types';

const BookCard: React.FC<{
  book: Book;
  onRate: (bookId: string, rating: number) => void; 
  onAddToCollection?: (book: any) => void;
  onDelete?: (bookId: string) => void;
  onEdit?: () => void;
}> = ({ book, onRate, onAddToCollection, onDelete, onEdit }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation(); 

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="book-card">
      <div className="image-cont">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
        />
      </div>

      <h3 className="card-heading">{book.volumeInfo.title}</h3>
      <p className="card-authors">
        {Array.isArray(book.volumeInfo.authors)
          ? book.volumeInfo.authors.join(", ")
          : "Unknown Author"}
      </p>
      <div className="card-button">
        <button onClick={handleOpenDrawer}>Details</button>
        {onAddToCollection && (
          <button onClick={() => onAddToCollection(book)}>
            Add to Collection
          </button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(book.id)}>Delete</button>
        )}
        {onEdit && <button onClick={onEdit}>Edit</button>}
      </div>

      
      {location.pathname === '/collections' && (
        <Rating 
          onRate={(rating) => onRate(book.id, rating)} 
          currentRating={book.rating} 
        />
      )}

      {isDrawerOpen && (
        <>
          <div className="overlay" onClick={handleCloseDrawer}></div>
          <BookDrawer
            isOpen={isDrawerOpen}
            onClose={handleCloseDrawer}
            book={book}
          />
        </>
      )}
    </div>
  );
};

export default BookCard;
