import React, { Component } from "react";
import ItemList from './components/items';
import DiaryTitle from './components/title';
import Comments from './components/comments';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className = "container">
        <div className = "row mainPage__holder">
          <DiaryTitle className = "col-lg-3" />
          <ItemList className = "col-lg-4" />
          <Comments className = "col-lg-4"/>
        </div>
      </div>
    );
  }
}

export default App;
