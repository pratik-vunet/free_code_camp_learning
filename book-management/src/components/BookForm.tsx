import React from 'react';
import { useForm } from 'react-hook-form';
import { Book } from './types'; 

const BookForm: React.FC<{ onAdd: (book: Book) => void }> = ({ onAdd }) => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();

  const onSubmit = (data: any) => {
    const newBook: Book = {
      id: Date.now().toString(), 
      volumeInfo: {
        title: data.title,
        authors: [data.author],
        description: data.description,
        imageLinks: {
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtwxBGmQn08Spt6V1V-MJAF40hAnK4R0nXA&s',
        },
      },
    };
    onAdd(newBook); 
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-cont'>
      <input {...register('title', { required: true })} placeholder="Title" />
      {errors.title && <span>This field is required</span>}

      <input {...register('author', { required: true })} placeholder="Author" />
      {errors.author && <span>This field is required</span>}

      <input {...register('description')} placeholder="Description" />

      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
