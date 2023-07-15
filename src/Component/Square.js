import React from "react";

const Square = ({ value, func_exp }) => {

    return (
        <button className={value} onClick={func_exp}
        >{value}</button>
    )
}

export default Square;
