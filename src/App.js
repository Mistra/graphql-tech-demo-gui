import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BookList from "./BookList"
import Book from "./Book"
import MainMenu from "./MainMenu"

function App() {
  return (
    <Router>
      <div class="container-fluid board">
        <div class="row">
          <div class="col-2 menu">
            <MainMenu />
          </div>
          <div class="col App">
            <Route exact path="/" component={BookList} />
            <Route path="/book" component={Book} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;