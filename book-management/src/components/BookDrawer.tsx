
import React from 'react';
import '../index.css'
const BookDrawer: React.FC<{ isOpen: boolean; onClose: () => void; book: any }> = ({ isOpen, onClose, book }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>Close</button>
      <h2>{book.volumeInfo.title}</h2>
      <h3>Published Date: {book.volumeInfo.publishedDate}</h3>
      <p>{book.volumeInfo.description}</p>
     
    </div>
  );
};

export default BookDrawer;
