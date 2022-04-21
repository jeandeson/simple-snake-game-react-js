import "./App.css";
import { useState, useEffect } from "react";

function checkBoundLeft(snakePos) {
    return snakePos === 0 || snakePos === 4 || snakePos === 8 || snakePos === 12 ? true : false;
}
function checkBoundRight(snakePos) {
    return snakePos === 3 || snakePos === 7 || snakePos === 11 || snakePos === 15 ? true : false;
}
function checkBoundDown(snakePos) {
    return snakePos < 12 ? true : false;
}
function checkBoundUp(snakePos) {
    return snakePos < 4 ? true : false;
}

function App() {
    const [snakePos, setSnake] = useState(2);
    const [snakeTail, setSnakeTail] = useState(1);
    const [direction, setDirection] = useState("right");
    const grids = Array.from(Array(16).keys());

    function changeControl(e) {
        if (e.key === "a") {
            setDirection("left");
        }
        if (e.key === "d") {
            setDirection("right");
        }
        if (e.key === "s") {
            setDirection("down");
        }
        if (e.key === "w") {
            setDirection("up");
        }
    }

    useEffect(() => {
        document.body.addEventListener("keypress", changeControl);
    }, []);

    useEffect(() => {
        function moveSnake() {
            if (direction === "right") {
                setSnakeTail(snakePos);
                checkBoundRight(snakePos) ? setSnake(snakePos - 3) : setSnake(snakePos + 1);
            } else if (direction === "left") {
                setSnakeTail(snakePos);
                checkBoundLeft(snakePos) ? setSnake(snakePos + 3) : setSnake(snakePos - 1);
            } else if (direction === "down") {
                setSnakeTail(snakePos);
                checkBoundDown(snakePos) ? setSnake(snakePos + 4) : setSnake(snakePos - 12);
            } else if (direction === "up") {
                setSnakeTail(snakePos);
                checkBoundUp(snakePos) ? setSnake(snakePos + 12) : setSnake(snakePos - 4);
            }
        }
        setTimeout(() => {
            let currentTimeout = setTimeout(function () {}, 0);
            while (currentTimeout--) {
                window.clearTimeout(currentTimeout);
            }
            moveSnake();
        }, 400);
    }, [snakePos, direction]);

    return (
        <div className="App">
            <div className="container">
                {grids.map((item, index) => (
                    <div
                        key={index}
                        className={`grid ${snakePos === index ? "current" : null} ${snakeTail === index ? "tail" : null}`}
                    >
                        {/* {item} */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
