import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Auxiliary";

class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey) => {
                return (
                    <li
                        key={igKey}
                        className="flex w-24 items-center justify-between"
                    >
                        <span className="capitalize">{igKey} :</span>
                        <span>{this.props.ingredients[igKey]}</span>
                    </li>
                );
            }
        );
        return (
            <Aux>
                <h3 className="mb-3 font-semibold">Your Order</h3>
                <p className="mb-2">
                    A delicious burger with the following ingredients:
                </p>
                <ul className="ml-5 mb-4">{ingredientSummary}</ul>
                <p className="mb-3">
                    Total Price:{" "}
                    <strong>$ {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to Checkout?</p>
                <div className="flex w-full items-center justify-end space-x-2 pt-5">
                    <button
                        className="mr-2 mb-2 rounded-lg border border-green-700 px-5 py-2.5 text-center text-sm font-medium uppercase text-green-700 transition-colors hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300"
                        onClick={this.props.continuePurchase}
                    >
                        continue
                    </button>
                    <button
                        className="mr-2 mb-2 rounded-lg border border-red-700 px-5 py-2.5 text-center text-sm font-medium uppercase text-red-700 transition-colors hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300"
                        onClick={this.props.cancelPurchase}
                    >
                        cancel
                    </button>
                </div>
            </Aux>
        );
    }
}

export default OrderSummary;
