import React from "react";
const Score = ({ score, reset_fun, restartFun }) => {

    const diffTostify=()=>{
        alert("X is Winner!")
    }
    return <div className="score">
        <h1>Score Board</h1>
        <h2>Score of X:  {score.scoreX}</h2>
        <h2>Score of Y:  {score.scoreY}</h2>
        {
            score.scoreX === 30 ?
                (
                    <h1 className="win">X is Winner! 🎉</h1>
                )
                : score.scoreY === 30 ?
                    (
                        <h1 className="win">Y is Winner! 🎉</h1>
                    )
                    :
                    ("")
        }
        <div className="btn-cont2">
            {
                (score.scoreX === 30 || score.scoreY === 30) ?
                    (
                        <button className="btn btn1" onClick={reset_fun} disabled>Reset</button>

                    )
                    : (
                        <button className="btn btn1" onClick={reset_fun} >Reset</button>

                    )
            }
            {/* <button className="btn btn1" onClick={reset_fun} >Reset</button> */}
            <button className="btn btn2" onClick={restartFun} >Restart</button>
        </div>
    </div>
}
export default Score;