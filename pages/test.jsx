import React from "react";

function Test4({greeting, name}) {

    return (
        <>
            <p>{(greeting + " ").repeat(5)} {name}</p>
        </>
    );
}

export default Test4;