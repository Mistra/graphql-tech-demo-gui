import React from "react";
import MainMenu from "./MainMenu"

function Board() {
  return (
    <div class="container-fluid board">
      <div class="row">
        <div class="col-2 menu">
          <MainMenu/>
        </div>
        <div class="col">
          2 of 3
        </div>
      </div>
    </div>
  );
}

export default Board;