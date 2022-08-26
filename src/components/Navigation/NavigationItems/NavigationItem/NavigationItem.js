const NavigationItem = (props) => {
    return (
        <li className="m-0 flex items-center h-full ">
            <a
                href={props.link}
                className={`${
                    props.active ? "bg-white md:bg-yellow-700" : ""
                } text-yellow-800 md:text-white h-full py-4 px-[10px] block hover:bg-yellow-700 transition-colors`}
            >
                {props.children}
            </a>
        </li>
    );
};

export default NavigationItem;
