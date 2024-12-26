import { useState } from "react";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  // display true display's the counter if true or the user prop if not
  const [display, setDisplay] = useState(true);
  const [color, onColor] = useState("#4B0082");

  const colors = [
    "#B8860B",
    "#A9A9A9",
    "#BDB76B",
    "#778899",
    "#8B4513",
    "#A0522D",
    "#CD853F",
    "#D2691E",
    "#8B0000",
    "#A52A2A",
    "#B22222",
    "#8B008B",
    "#556B2F",
    "#6B8E23",
    "#2F4F4F",
    "#4682B4",
    "#5F9EA0",
    "#8B4513",
    "#A0522D",
    "#6A5ACD",
    "#483D8B",
    "#4B0082",
    "#800080",
    "#8A2BE2",
    "#9400D3",
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <>
      <div className="displayBtns">
        <button disabled={display} onClick={() => setDisplay(true)}>
          State
        </button>
        <button disabled={!display} onClick={() => setDisplay(false)}>
          Prop
        </button>
      </div>
      <div className="app">
        {display && <Counter />}
        {!display && (
          <UserCard
            name={"Habib Elias"}
            email={"habibelias234@gmail.com"}
            color={color}
            age={20}
            onColor={() => onColor(getRandomColor)}
          />
        )}
      </div>
    </>
  );
}

export default App;
