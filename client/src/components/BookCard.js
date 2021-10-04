import React from 'react'
import { NavLink } from 'react-router-dom'

const BookCard = ({book, deleteBook}) => {
  return (
    <div>
      <li>
        <NavLink to={`/books/${book.id}`}>{book.title} by {book.author}</NavLink> <button onClick={() => deleteBook(book.id)}>Delete</button>
        {/* {book.title} by {book.author}<button onClick={() => deleteBook(book.id)}>Delete</button> */}
      </li>
    </div>
  )
}

export default BookCard
