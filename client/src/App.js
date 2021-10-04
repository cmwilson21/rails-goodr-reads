import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import BookList from './components/BookList'
import BookNew from './components/BookNew'
import Book from './components/Book'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Welcome to GoodrReads</h2>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/books" render={(props) => <BookList {...props} />}/>
          <Route exact path="/books/new" render={(props) => <BookNew {...props} />} />
          <Route exact path="/books/:id" component={ Book } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
