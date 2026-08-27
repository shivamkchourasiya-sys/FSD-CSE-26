function Book(props) {
    const image = React.createElement(
        "img",
        {
            src: props.image,
            width: "100px",
            height: "100px"
        },
        null
    );

    const title = React.createElement(
        "h2",
        { style: { color: "red" } },
        "Title: " + props.title
    );

    const price = React.createElement(
        "h2",
        { style: { color: "green" } },
        "Price: " + props.price + "/-"
    );

    const btn = React.createElement(
        "button",
        { style: { color: "blue" } },
        "Add To Cart"
    );

    return React.createElement(
        "div",
        { className: "book" },
        [image, title, price, btn]
    );
}

export default Book;