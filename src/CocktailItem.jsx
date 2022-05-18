import React from 'react';



// const CocktailItem = (props) => {
//   return <span><button>🤍</button> {props.cocktail.strDrink}</span>
// }
// export default CocktailItem


class CocktailItem extends React.Component {
  constructor(props) {
    super();
    this.state = { 
      cocktail: props.cocktail,
     }
     
  }
  
  
  render() { 
    // console.log(this.state.cocktail);
    return <> <span id="drink">{this.state.cocktail.strDrink}</span></>
  }
}
 
export default CocktailItem;


