import React from "react";

function Square({width}) {
    return (<svg width={width} height={width} viewBox="0 0 100 100">
        <rect width="100" height="100"></rect>
    </svg>)
}

export default Square;