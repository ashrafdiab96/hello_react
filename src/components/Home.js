import React, { Fragment } from "react";

const Home = () => {
    const hStyle = { color: "red", marginTop:"200px", marginBottom:"200px" };
    const name = "menna";
    const names = ["Ashraf", "Menna", "Asseel", "Mariam"];

    return (
        <Fragment>
            <h3 style={{ color: "gray", marginTop:"20px", marginBottom:"20px" }}>Home page</h3>
            <h3 style={hStyle}>Home page</h3>

            <p>{name === "menna" ? "Hello Menna" : "Hi there"}</p>
            <p>{names.map((na) => <p>{na}</p>)}</p>

        </Fragment>
    );
};

export default Home;