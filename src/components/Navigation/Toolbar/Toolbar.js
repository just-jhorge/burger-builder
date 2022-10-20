import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import { RiMenu3Fill } from "react-icons/ri";

const Toolbar = ({ openSideDrawer }) => {
    return (
        <header className="fixed top-0 left-0 h-14 w-full bg-yellow-800 flex items-center justify-between px-4 md:px-20 z-[90]">
            <Logo />
            <nav className="hidden md:block">
                <NavigationItems />
            </nav>
            <div
                className="md:hidden text-white text-3xl"
                onClick={openSideDrawer}
            >
                <RiMenu3Fill />
            </div>
        </header>
    );
};

export default Toolbar;
