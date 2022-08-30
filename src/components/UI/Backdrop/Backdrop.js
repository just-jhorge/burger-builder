const Backdrop = (props) => {
    return props.show ? (
        <div
            className="w-full h-full fixed z-[100] left-0 top-0 bg-black opacity-70"
            onClick={props.clicked}
        />
    ) : null;
};

export default Backdrop;
