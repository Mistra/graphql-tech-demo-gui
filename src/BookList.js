import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

const axios = require('axios');

// Configurazioni
const url = 'http://localhost:8080/graphql/'
const graphqlQuery = {
  query: `query {
    getBooks {
      id
      title
      author {
        name
      }
    } 
  }`
}
/////////////////

const Table = ({ children }) => {
  console.log(children)
  return (
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {children.map(row => (
          <tr key={row.id}>
            <td>
              <Link to={{ pathname: "/book", search: `?id=${row.id}` }}>
                {row.id}
              </Link>
            </td>
            <td>{row.title}</td>
            <td>{row.author.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

class BookList extends React.Component {

  componentDidMount = () => this.getBooks()

  getBooks = async () => {
    const res = await axios.post(url, graphqlQuery);
    const books = res.data.data.getBooks;
    this.setState({ books })
  }

  render = () => (
    <div>
      <div class="menu-header">
        <h1>Libri</h1>
      </div>
      {this.state &&
        <Table>{this.state.books}</Table>
      }
    </div>
  );
}

export default BookList;
