import { Component } from "react";
import Aux from "../../../hoc/Aux/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.show !== this.props.show ||
            nextProps.children !== this.props.children
        );
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div
                    className="fixed left-5 right-5 top-[20%] z-[200] rounded-md bg-white px-5 py-10 ring-2 ring-black transition-all sm:left-[15%] sm:w-[500px] md:left-[calc(50%-250px)]"
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
