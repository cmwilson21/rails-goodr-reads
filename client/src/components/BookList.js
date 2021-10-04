import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const loadBooks = async () => {
      const resp = await fetch('http://localhost:4000/books')
      const data = await resp.json();
      setBooks(data)
    } 
    loadBooks();
  }, [])

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id))
  }

  const deleteBook = async id => {
    await fetch(`http://localhost/3000/books/${id}`, {method: "DELETE"})
    removeBook(id);
  }

  const bookCard = books.map((book, index) => <BookCard key={index} book={book} deleteBook={deleteBook}/>)


  return (
    <div>
      <h1>Book List</h1>
      {bookCard}
    </div>
  )
}

export default BookList
