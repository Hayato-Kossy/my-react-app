import { useState } from "react"

export const Calcurator = () => {
    const [selectedNumber, setSelectedNumber] = useState("")
    const [result, setResult] = useState("")
    
    const handleNumberClick = (number) => {
        setSelectedNumber(selectedNumber + number)
    }
    
    const handleOperatorClick = (operator) => {
        setSelectedNumber(selectedNumber + operator)
    }
    
    const handleEqualClick = () => {
        try {
            setResult(eval(selectedNumber))
        } catch (error) {
            setResult("error")
        }
    }
    
    const handleClearClick = () => {
        setSelectedNumber("")
        setResult("")
    }
    
    const handleDeleteClick = () => {
        setSelectedNumber(selectedNumber.slice(0, -1))
    }
    
    return (
        <div>
            <input type="text" value={selectedNumber} readOnly />
            <button onClick={() => handleNumberClick("1")}>1</button>
            <button onClick={() => handleNumberClick("2")}>2</button>
            <button onClick={() => handleNumberClick("3")}>3</button>
            <button onClick={() => handleOperatorClick("+")}>+</button>
            <button onClick={() => handleNumberClick("4")}>4</button>
            <button onClick={() => handleNumberClick("5")}>5</button>
            <button onClick={() => handleNumberClick("6")}>6</button>
            <button onClick={() => handleOperatorClick("-")}>-</button>
            <button onClick={() => handleNumberClick("7")}>7</button>
            <button onClick={() => handleNumberClick("8")}>8</button>
            <button onClick={() => handleNumberClick("9")}>9</button>
            <button onClick={() => handleOperatorClick("*")}>*</button>
            <button onClick={() => handleNumberClick("0")}>0</button>
            <button onClick={() => handleEqualClick()}>=</button>
            <button onClick={() => handleOperatorClick("/")}>/</button>
            <button onClick={() => handleClearClick()}>AC</button>
            <button onClick={() => handleDeleteClick()}>▶️</button>
            <div>{result}</div>
        </div>
    )
}