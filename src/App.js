import React from "react";
import "./style.css"
import Board from "./Component/Board"
import Header from "./Component/Header"
const App=()=>{

    return (
        <div className="app">
            <Header/>
            <Board/>
        </div>
    )
}

export default App