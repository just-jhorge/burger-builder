import React, { useState } from "react";
import Aux from "../Aux/Auxiliary";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const Layout = ({ children }) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const SideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    };

    const SideDrawerOpenHandler = () => {
        setShowSideDrawer(true);
    };

    return (
        <Aux>
            <Toolbar openSideDrawer={SideDrawerOpenHandler} />
            <SideDrawer
                open={showSideDrawer}
                closed={SideDrawerClosedHandler}
            />
            <main className="mt-[80px]">{children}</main>
        </Aux>
    );
};

export default Layout;
