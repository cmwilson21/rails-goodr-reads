import React from 'react'

const BookCard = ({book, deleteBook}) => {
  return (
    <div>
      <li>
        {book.title} by {book.author} <button onClick={() => deleteBook(book.id)}>Delete</button>
      </li>
    </div>
  )
}

export default BookCard
