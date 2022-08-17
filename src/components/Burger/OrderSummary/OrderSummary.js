import React from "react";
import Aux from "../../../hoc/Auxiliary";

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey} className="flex items-center justify-between w-24">
                <span className="capitalize">{igKey} :</span>
                <span>{props.ingredients[igKey]}</span>
            </li>
        );
    });

    return (
        <Aux>
            <h3 className="font-semibold mb-3">Your Order</h3>
            <p className="mb-2">
                A delicious burger with the following ingredients:
            </p>
            <ul className="ml-5 mb-4">{ingredientSummary}</ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default OrderSummary;
