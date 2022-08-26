import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Auxiliary";

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log("[OrderSummary] will update");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey) => {
                return (
                    <li
                        key={igKey}
                        className="flex items-center justify-between w-24"
                    >
                        <span className="capitalize">{igKey} :</span>
                        <span>{this.props.ingredients[igKey]}</span>
                    </li>
                );
            }
        );
        return (
            <Aux>
                <h3 className="font-semibold mb-3">Your Order</h3>
                <p className="mb-2">
                    A delicious burger with the following ingredients:
                </p>
                <ul className="ml-5 mb-4">{ingredientSummary}</ul>
                <p className="mb-3">
                    Total Price:{" "}
                    <strong>$ {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to Checkout?</p>
                <div className="w-full flex items-center justify-end pt-5 space-x-2">
                    <button
                        className="uppercase text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors"
                        onClick={this.props.continuePurchase}
                    >
                        continue
                    </button>
                    <button
                        className="uppercase text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors"
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
