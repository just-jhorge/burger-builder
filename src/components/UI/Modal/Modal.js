import { Component } from "react";
import Aux from "../../../hoc/Aux/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log("[Modal] will update");
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div
                    className="fixed z-[200] bg-white ring-2 ring-black rounded-md px-5 py-10 left-5 right-5 md:left-[calc(50%-250px)] sm:left-[15%] top-[20%] transition-all sm:w-[500px]"
                    style={{
                        transform: this.props.show
                            ? "translateY(0)"
                            : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0",
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
