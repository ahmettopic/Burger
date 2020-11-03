import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import ReactAux from '../../../hoc/ReactAux/ReactAux';

class OrderSummary extends Component {

    componentWillUpdate() {
    }
    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });

        return (
            <ReactAux>
                <h3>Your Order</h3>
                <p>A delicious Burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelledHandler}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinuedHandler}>CONTINUE</Button>
            </ReactAux>
        );
    }

}

export default OrderSummary;