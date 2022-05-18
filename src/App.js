import logo from './logo.svg';
import './App.css';
import CocktailItem from './CocktailItem';
import CocktailList from './CocktailList';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktailArr: [],
      searchText: '',
      favoriteDrinks: []
    };
    this.favoriteHandler = this.favoriteHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  favoriteHandler (drinkValue) {
    this.setState({
      favoriteDrinks: [...this.state.favoriteDrinks, drinkValue]
    }, ()=>console.log(this.state.favoriteDrinks))
    
  }

  inputHandler (e) {
    if (e.key === "Enter") {
      fetch('http://76.174.184.10:3001/search/' + this.state.searchText)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cocktailArr: data.drinks
        })
      })
      e.target.value = '';
    }
    var lowerCase = e.target.value.toLowerCase();
    this.setState({
      searchText: lowerCase
    })
    // console.log(this.state.searchText);
  }
  componentDidMount() {
    fetch('http://76.174.184.10:3001/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cocktailArr: data.drinks
        })
      })
  }
   render () {
      return (
        <div className="App">
          <div className="search">
            <input id="fname" name="fname" placeholder="Search" type="search" label="Search" onKeyUp={this.inputHandler} />
          </div>
          <CocktailList drinks={this.state.cocktailArr} onFavorite={this.favoriteHandler} input={this.state.searchText} />
        </div>
    )
   }
    
}

export default App;

/*

UI Elements:
  App
    <SearchBar /> ✅
      <CocktailList /> ✅
        <CocktailItem /> ✅
      <FavoriteButton />
  Sidebar
    <FavoritesList />
      <FavoriteItem />

Components:
  App
    States: ListOfCocktails (array)
  CocktailList
    States:
  CocktailItem
    States: Favorite (boolean)
  FavoritesList
    States: Favorites (array)
  SearchBar
    States:

GET http://localhost:3001/ returns an object with property drinks that is an array of drink objects
GET http://localhost:3001/search/{Your ingredient search query here} returns an object with property drinks that is an array of drink objects that match the search query.

*/