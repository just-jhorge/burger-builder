import React, { Component } from "react";
import Aux from "../Aux/Auxiliary";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    SideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true });
    };

    render() {
        return (
            <Aux>
                <Toolbar openSideDrawer={this.SideDrawerOpenHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler}
                />
                <main className="mt-[80px]">{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
