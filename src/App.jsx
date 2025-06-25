import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const Counter = ({ name, count }) => {
  return <p>{name} {count}</p>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const createButtonHandler = (setter, previousValue) => {
    return () => setter(previousValue + 1);
  }

  return (
    <div>
      <Button onClick={createButtonHandler(setGood, good)} text="Good"></Button>
      <Button onClick={createButtonHandler(setNeutral, neutral)} text="Neutral"></Button>
      <Button onClick={createButtonHandler(setBad, bad)} text="Bad"></Button>
    </div>
  )
}

export default App;