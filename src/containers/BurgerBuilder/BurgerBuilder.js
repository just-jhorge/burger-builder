import React, { useState } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
    salad: 0.39,
    cheese: 0.69,
    meat: 0.99,
    bacon: 0.49,
};

const BurgerBuilder = () => {
    const [state, setState] = useState({
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 1.99,
        purchasable: false,
        purchasing: false,
        loading: false,
    });

    const updatePurchaseState = (ingredients) => {
        const sum = Object.values(ingredients).reduce((sum, el) => {
            return sum + el;
        }, 0);

        setState({ ...state, purchasable: sum > 0 });
    };

    const purchaseHandler = () => {
        setState({ ...state, purchasing: true });
    };

    const addIngredientHandler = (type) => {
        const oldCount = state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        setState({
            ...state,
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        updatePurchaseState(updatedIngredients);
    };

    const removeIngredientHandler = (type) => {
        const oldCount = state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        setState({
            ...state,
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        updatePurchaseState(updatedIngredients);
    };

    const purchaseCancelHandler = () => {
        setState({ ...state, purchasing: false });
    };

    const purchaseContinueHandler = () => {
        setState({ ...state, loading: true });
        const order = {
            ingredients: state.ingredients,
            price: state.totalPrice,
            customer: {
                name: "George Afrifa",
                address: {
                    street: "TestStreet",
                    zipCode: "4241",
                    country: "Ghana",
                },
                email: "test@test.com",
            },
            deliveryMethod: "fastest",
        };

        axios
            .post("/orders.json", order)
            .then((response) => {
                setState({ ...state, loading: false, purchasing: false });
            })
            .catch((error) => {
                setState({ ...state, loading: false, purchasing: false });
            });
    };

    const disabledInfo = {
        ...state.ingredients,
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
        <OrderSummary
            ingredients={state.ingredients}
            price={state.totalPrice}
            cancelPurchase={purchaseCancelHandler}
            continuePurchase={purchaseContinueHandler}
        />
    );

    if (state.loading) {
        orderSummary = <Spinner />;
    }

    return (
        <Aux>
            <Modal show={state.purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            <Burger ingredients={state.ingredients} />
            <BuildControls
                addIngredient={addIngredientHandler}
                removeIngredient={removeIngredientHandler}
                disabled={disabledInfo}
                price={state.totalPrice}
                purchasable={state.purchasable}
                ordered={purchaseHandler}
            />
        </Aux>
    );
};

export default BurgerBuilder;
