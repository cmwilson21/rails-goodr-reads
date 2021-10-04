import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const BookNew = () => {
  const [form, setForm] = useState({
    title: "",
    author: ""
  })
  const history = useHistory();

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(form)
    }
    await fetch('http://localhost:4000/books', options)
    history.push('/books');
  }

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   fetch('http://localhost:4000/books', {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(form)
  //   })
  //   .then(resp => resp.json())
  //   .then(data => history.push('/books'))
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" value={form.title} onChange={handleChange} autoFocus={true} />
        </div>
        <br />
        <div>
          <label htmlFor="author">Author: </label>
          <input type="text" id="author" name="author" value={form.author} onChange={handleChange} autoFocus={true} />
          <input type="submit" value={"Submit Book"}/>
        </div>
      </form>
    </div>
  )
}

export default BookNew
