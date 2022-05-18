import React from 'react';
import CocktailItem from './CocktailItem';

const CocktailList = (props) => {

  const filteredDrinks = props.drinks.filter(element => {
    if (props.input === '') {
      return element
    } else {
      return element.strDrink.toLowerCase().includes(props.input);
    }
  })
  // function handleChange (e) {
  //   props.onFavorite(e)
  // }
  return (       
      <ul>
        { filteredDrinks.map(drink => {
          //  HEERE
          function handleChange(e){
            props.onFavorite(drink.strDrink)
          }
            return <li key={drink.idDrink}>
              <button onClick={handleChange}>🤍</button><CocktailItem cocktail={drink}/>
              </li>
        })
        }
      </ul>
  );
}

export default CocktailList;

// {/* <CocktailItem key={drink.idDrink} cocktail={drink} /> */}



// class ClassName extends Component {
//   constructor(props) {
//     super(props);
//   }
//   this.state = {  }
//   render() { 
//     return (  );
//   }
// }
 
// export default ClassName;