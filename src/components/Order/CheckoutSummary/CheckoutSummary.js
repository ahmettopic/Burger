import React from 'react';
// Components
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
// CSS
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Does it look tasty?</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Danger'
        clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button btnType='Success'
        clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary;