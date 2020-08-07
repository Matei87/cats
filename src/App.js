import React from 'react';
import Cards from './components/Cards/Cards';
import SearchBox from './components/Searchbox/Searchbox';
import Footer from './components/Footer/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    monsters: [],
    searchInput: ''
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }))
      .catch(err => console.log(err));
  }

  handlechange = (e) => {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    const { monsters, searchInput } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchInput.toLowerCase()))

    return (
      <>
        <div className="container">
          <h1>Cats Rolodex</h1>
          <SearchBox handlechange={this.handlechange} />
          <div className="row">
            <Cards monsters={filteredMonsters} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
