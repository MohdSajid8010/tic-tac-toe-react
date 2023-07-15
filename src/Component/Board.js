import React, { useState } from "react";
import Square from "./Square"
import Score from "./Score"

const Board = () => {
    const [sqValue, setSqValue] = useState(new Array(9).fill(null))
    const [turn, setTurn] = useState("X")
    const [winner, setWinner] = useState("")
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState({ scoreX: 0, scoreY: 0 })

    function isWinner() {
        let win_arr = [
            [sqValue[0], sqValue[1], sqValue[2]],
            [sqValue[3], sqValue[4], sqValue[5]],
            [sqValue[6], sqValue[7], sqValue[8]],
            [sqValue[0], sqValue[3], sqValue[6]],
            [sqValue[1], sqValue[4], sqValue[7]],
            [sqValue[2], sqValue[5], sqValue[8]],
            [sqValue[0], sqValue[4], sqValue[8]],
            [sqValue[2], sqValue[4], sqValue[6]]
        ]

        for (let arr of win_arr) {
            if (arr[0] === "X" && arr[1] === "X" && arr[2] === "X") {
                return "X win 🎉"
            } else if (arr[0] === "Y" && arr[1] === "Y" && arr[2] === "Y") {
                return "Y win 🎉"
            }

        }

        if (!sqValue.includes(null)) {
            return "Draw"
        } else {
            return ""
        }
    }

    function handleClicked(idx) {
        if (sqValue[idx] !== null) return;
        if (gameOver) return;

        sqValue[idx] = turn;
        let n_arr = [...sqValue]

        setTurn(turn === "X" ? "Y" : "X")

        setSqValue(n_arr);

        let winner = isWinner()
        if (winner) {
            setWinner(winner)
            setGameOver(true)
            setTurn("")
            if (winner[0] === "X") {
                setScore({ ...score, scoreX: score.scoreX + 10 })
            } else if (winner[0] === "Y") {
                setScore({ ...score, scoreY: score.scoreY + 10 })
            }
            console.log("game over \n", winner)
        }
    }
    function reset_fun() {
        setSqValue(new Array(9).fill(null))
        setWinner("")
        setGameOver(false)
        setTurn("X")
    }

    function restartFun() {
        reset_fun()
        setScore({ scoreX: 0, scoreY: 0 })
    }


    return <div className="board-cont">

        <div className="left">
            <div className="btn-cont">
                {
                    sqValue.map((val, i) => {
                        return <Square value={val} func_exp={() => handleClicked(i)} />
                    })
                }
            </div>

            <div className="turn">
                {turn && (<h1>Turn for: <span className={turn}>{turn}</span></h1>)}
                {winner && (<h1>{winner}</h1>)}

            </div>
        </div>

        <div className="right">
            <Score score={score} reset_fun={reset_fun} restartFun={restartFun} />
        </div>

    </div>
}

export default Board