import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>
                Current Price: $ <strong>{props.price.toFixed(2)}</strong>
            </p>
            {controls.map((control) => (
                <BuildControl
                    added={() => props.addIngredient(control.type)}
                    removed={() => props.removeIngredient(control.type)}
                    disabled={props.disabled[control.type]}
                    key={control.label}
                    label={control.label}
                />
            ))}
            <button
                className="bg-yellow-400 mt-5 px-7 py-4 rounded-md shadow-md text-sm cursor-pointer hover:bg-yellow-500 disabled:bg-slate-400 disabled:text-slate-500 disabled:cursor-not-allowed [&:not(disabled)]:animate-pulse"
                disabled={!props.purchasable}
                onClick={props.ordered}
            >
                ORDER NOW{" "}
            </button>
        </div>
    );
};

export default BuildControls;
