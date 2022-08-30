import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
    return (
        <div className="w-full bg-yellow-600 flex flex-col items-center mx-auto py-5">
            <p>
                Current Price: $ <strong>{props.price.toFixed(2)}</strong>
            </p>
            <div className="my-5">
                {controls.map((control) => (
                    <BuildControl
                        added={() => props.addIngredient(control.type)}
                        removed={() => props.removeIngredient(control.type)}
                        disabled={props.disabled[control.type]}
                        key={control.label}
                        label={control.label}
                    />
                ))}
            </div>
            <button
                className="bg-yellow-400 mt-5 px-7 py-3 rounded-md shadow-md text-sm font-light cursor-pointer hover:bg-yellow-500 disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed"
                disabled={!props.purchasable}
                onClick={props.ordered}
            >
                ORDER NOW{" "}
            </button>
        </div>
    );
};

export default BuildControls;
