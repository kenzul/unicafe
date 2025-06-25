import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const Counter = ({ name, count }) => {
  return <p>{name} {count}</p>
}

const Feedback = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="Good"></Button>
      <Button onClick={handleNeutralClick} text="Neutral"></Button>
      <Button onClick={handleBadClick} text="Bad"></Button>
    </div>
  )
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
      <Feedback
        handleGoodClick={createButtonHandler(setGood, good)}
        handleBadClick={createButtonHandler(setBad, bad)}
        handleNeutralClick={createButtonHandler(setNeutral, neutral)}
      ></Feedback>
    </div>
  )
}


export default App;