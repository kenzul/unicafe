import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({ name, value }) => {
  return <p>{name} {value}</p>
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

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine name="Good" value={good}></StatisticLine>
      <StatisticLine name="Neutral" value={neutral}></StatisticLine>
      <StatisticLine name="Bad" value={bad}></StatisticLine>
      <StatisticLine name="All" value={total}></StatisticLine>
      <StatisticLine name="Average" value={average}></StatisticLine>
      <StatisticLine name="Positive" value={positive}></StatisticLine>
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
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}


export default App;