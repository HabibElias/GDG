# GDG Task: Demonstrating State and Props

This project demonstrates the use of state and props in a React application.

## Introduction

This project helped me understand how to use state and props in React. State allows you to manage data within a component, while props enable you to pass data between components.

## Components

The project includes the following components:

- `App`: The main component that renders other components.
- `Counter`: A component that demonstrates the use of state.
- `UserCard`: A component that demonstrates the use of props.

## State

State is used to manage data within a component. Here is an example of a component using state:

```jsx
import { useState } from "react";
import "./style.css";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);

  return (
    <div className="counter">
      <div className="number">{number}</div>
      <div className="btns">
        <button onClick={increment}>Increment</button>
        <button disabled={number == 0 ? true : false} onClick={decrement}>
          Decrement
        </button>
        <button className="reset" onClick={() => setNumber(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

## Props

Props are used to pass data from one component to another. Here is an example of a component using props:

```jsx
import "./styles.css";

interface prop {
  name: string;
  email: string;
  age: number;
  color: string;
  onColor: () => void;
}

const UserCard = ({ name, email, age, color, onColor }: prop) => {
  return (
    <div className="userCard">
      <button className="changeColor" onClick={onColor}>
        Change Color
      </button>
      <ul className="card" style={{ background: color, color: "#111" }}>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
      </ul>
    </div>
  );
};

export default UserCard;
```

## Apps Component

The main component that renders other components.

```jsx
import { useState } from "react";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  // display true display's the counter if true or the user prop if not
  const [display, setDisplay] = useState(true);
  const [color, onColor] = useState("#4B0082");

  // the colors used for the userCard
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
```