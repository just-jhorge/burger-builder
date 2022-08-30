const BuildControl = (props) => {
    return (
        <div className="flex justify-between items-center py-1 my-1 select-none mb-2">
            <div className="font-light w-14 mr-7">{props.label}</div>
            <button
                className="block py-1 mx-2 w-20 cursor-pointer rounded-md outline-none text-lg bg-yellow-600 brightness-125 border-2 border-yellow-700 text-white disabled:brightness-100 disabled:cursor-not-allowed  disabled:bg-gray-400 disabled:border-2 disabled:border-gray-500 disabled:text-gray-600"
                onClick={props.removed}
                disabled={props.disabled}
            >
                -
            </button>
            <button
                className="block py-1 mx-2 w-20 cursor-pointer rounded-md outline-none text-lg bg-yellow-700 brightness-125 border-2 border-yellow-800 text-white"
                onClick={props.added}
            >
                +
            </button>
        </div>
    );
};

export default BuildControl;
