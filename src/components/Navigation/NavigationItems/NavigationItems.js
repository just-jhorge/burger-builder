import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <ul className="m-0 p-0 flex flex-col md:flex-row items-start md:items-center h-full">
            <NavigationItem link="/" active>
                Burger Builder
            </NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
};

export default NavigationItems;
