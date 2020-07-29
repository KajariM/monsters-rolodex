import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './Component/card-list/card-list.component';
import { SearchBox } from './Component/search/search.component';
class App extends Component {

  constructor() {
    super();
    this.state = {
      buttontext: "Click me",
      monsters: [],
      searchField: ""
    }
  }
  handleChange=((e)=>{
    this.setState({ searchField: e.target.value }) 
  })
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(mon =>
      mon.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox type="search" placeholder="search monsters" handleChange={this.handleChange}></SearchBox>
         <CardList monsters={filteredMonsters}></CardList>
        <button onClick={() => this.setState({ buttontext: 'hello KJ' })}>{this.state.buttontext} </button>


      </div>
    );
  }
}

export default App;
