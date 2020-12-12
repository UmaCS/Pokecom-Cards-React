import React, {Component} from 'react';
import './Pokecard.css'
const pokecard_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
class Pokecard extends Component{
    render(){
    const imgSrc = `${pokecard_API}${this.props.id}.png`  
        return(
            <div className='Pokecard'>
            <h1>{this.props.name}</h1>
            <img src={imgSrc} alt={this.props.name} />
            </div>
        )
    }
}
export default Pokecard;