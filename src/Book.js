import React from 'react';
import './App.css';
const axios = require('axios');

// Configurazioni
const url = 'http://localhost:8080/graphql/'
const graphqlQuery = (id) => ({
  query: `query {
    getBook(id: ${id}) {
      id
      title
      description
      author {
        name
        books {
          title
        }
      }
    } 
  }`
})
/////////////////

class Book extends React.Component {

  componentDidMount = () => this.getBook()

  getBook = async () => {
    const params = new URLSearchParams(this.props.location.search);
    const id = params.get("id")

    const res = await axios.post(url, graphqlQuery(id));
    const book = res.data.data.getBook;
    this.setState(book)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {this.state && // aspetto di avere i dati per il rendering
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">{this.state.title}</h1>
              <h5 className="card-text">{this.state.description}</h5>
              <p className="card-text">Altro dell'autore:</p>
              <p className="card-text">{this.state.author.books.map(b => b.title).join(", ")}</p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Book;
/*
< div className="App" >
            <h2>{this.state.title}</h2>
            <h3>{this.state.description}</h3>
            <p>A cura di: {this.state.author.name}</p>
            <p>Altro dell'autore</p>
            <p>{this.state.author.books.map(b => b.title).join(", ")}</p>
          </div>
          */