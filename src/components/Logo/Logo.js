const Logo = () => {
    return (
        <div className="relative h-20 w-20 ">
            <img
                src={require("../../assets/images/burger.png")}
                className="absolute top-3 h-full w-full"
                alt="Burger"
            />
        </div>
    );
};

export default Logo;
