import { useState } from "react";
import "./App.css";

function App () {

    let [counter , setCounter] = useState(0);
    let addingHandeler = () => {
        setCounter (counter + 1);
    }

    let removingHandeler = () => {
        setCounter (counter - 1);
    }

    let fiveNumbersAddingHandeler = () => {
        setCounter (counter + 5);
    }

    let fiveNumbersRemovingHandeler = () => {
        setCounter (counter - 5);
    }

    let resetHandeler = () => {
        setCounter (counter = 0);
    }

    return (
        <div className="container">

            <h1>{counter}</h1>
            <button className="button-add" onClick={addingHandeler}>+1</button>
            
            <button className="button-5numbers-add" onClick={fiveNumbersAddingHandeler}>+5</button>

            <button className="button-remove" onClick={removingHandeler}>-1</button>

            <button className="button-5numbers-remove" onClick={fiveNumbersRemovingHandeler}>-5</button>

            <button className="button-reset" onClick={resetHandeler}>Reset</button>
        </div>
    )
}

export default App;