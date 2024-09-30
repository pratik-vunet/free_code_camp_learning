import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Book } from './types';

interface EditBookFormInputs {
  title: string;
  authors: string;
}

const BookEditForm: React.FC<{
  book: Book;
  onSubmit: (updatedBook: Book) => void;
  onCancel: () => void;
}> = ({ book, onSubmit, onCancel }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<EditBookFormInputs>({
    defaultValues: {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors?.[0] || '', // Assume only first author for simplicity
    }
  });

  const onFormSubmit: SubmitHandler<EditBookFormInputs> = (data) => {
    const updatedBook = {
      ...book,
      volumeInfo: {
        ...book.volumeInfo,
        title: data.title,
        authors: [data.authors],
      },
    };

    onSubmit(updatedBook); // Trigger parent component's submit function
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="book-edit-form">
      <label>
        Title:
        <input
          type="text"
          {...register('title', { required: 'Title is required' })}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </label>

      <label>
        Author:
        <input
          type="text"
          {...register('authors', { required: 'Author is required' })}
        />
        {errors.authors && <p>{errors.authors.message}</p>}
      </label>

      <div className="edit-book-button">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default BookEditForm;
