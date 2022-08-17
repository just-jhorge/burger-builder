import Aux from "../../hoc/Auxiliary";

const layout = (props) => (
    <Aux>
        <header>Toolbar, Sidedrawer, Backdrop</header>
        <main className="mt-4">{props.children}</main>
    </Aux>
);

export default layout;
