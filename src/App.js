import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const bgcolor = 'blue';

  const [direction, setDirection] = useState(0);
  const [level, setLevel] = useState(0);

  let timer;

  const containerStyles = {
    height: 100,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
    width: 20,
    position: 'relative'
  }

  const fillerStyles = {
    height: `${level * 20}%`,
    width: 20,
    bottom: 0,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    position: 'absolute'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  const buttonsStyles = {
    marginTop: 20
  }

  useEffect(() => {
    timer = setTimeout(() => {
      updateLevel();
    }, 2000);
  });

  const onClickIncrease = () => {
    clearTimeout(timer);
    setDirection(1);
  }

  const onClickDecrease = () => {
    clearTimeout(timer);
    setDirection(-1);
  }

  const updateLevel = () => {
    let val = level + direction;
    if(val < 0)
      val = 0;
    if(val > 5)
      val = 5;
    setLevel(val);
  }

  return (
    <>
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${level}`}</span>
      </div>

      
    </div>
    <div style={buttonsStyles}>
      <button onClick={onClickIncrease}>increaseWaterLevel</button>
      <button onClick={onClickDecrease}>decreaseWaterLevel</button>
      </div>
    </>
  );
  
}

export default App;
