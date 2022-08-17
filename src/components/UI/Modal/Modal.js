const Modal = (props) => {
    return (
        <div
            // className={classes.Modal}
            className="fixed z-50 bg-white ring-2 ring-black rounded-md px-5 py-10 left-[15%] top-[20%] transition-all sm:w-[500px] sm:left-[calc(50%-250px)]"
            style={{
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.show ? "1" : "0",
            }}
        >
            {props.children}
        </div>
    );
};

export default Modal;
