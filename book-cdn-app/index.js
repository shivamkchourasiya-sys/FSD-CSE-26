import Book from "./Book.js";

const bookdata = [
    { image: "", title: "ReactJS", price: 465 },
    { image: "", title: "NodeJS", price: 578 },
    { image: "", title: "ExpressJS", price: 963 },
    { image: "", title: "ReactJS", price: 465 },
    { image: "", title: "NodeJS", price: 578 },
    { image: "", title: "ExpressJS", price: 963 }
];

function App() {
    const bookstore = bookdata.map((b) => {
        return Book(b);
    });

    return React.createElement(
        "div",
        { className: "bookstore" },
        bookstore
    );
}

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);

root.render(App());