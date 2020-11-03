import React from 'react';
// CSS
import classes from './Burger.css';
// Components
import BurgerIngredient from '../BurgerIngredients/BurgerIngredient';

const burger = (props) => {
    let transormedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transormedIngredients.length === 0) {
        transormedIngredients = <p>Add ingredients! </p>
    }
    return (

        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transormedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;