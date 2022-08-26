import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Aux/Auxiliary";

const SideDrawer = (props) => {
    let className = [
        "fixed w-72 max-w-[70%] h-full left-0 top-0 z-[200] bg-white py-8 px-4 transition-all sm:hidden",
        "-translate-x-full",
    ];

    if (props.open) {
        className = [
            "fixed w-72 max-w-[70%] h-full left-0 top-0 z-[200] bg-white py-8 px-4 transition-all sm:hidden",
            "translate-x-0",
        ];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={className.join(" ")}>
                <Logo />
                <nav className="mt-10">
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;
