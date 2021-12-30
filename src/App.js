import { useState } from 'react';
import Board from './Board';
import Button from './Button';

function Random(n){
  return Math.ceil(Math.random() * n);
}

function App() {

  
  const [History, setHistory] = useState([]);

  
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = Random(6);
    
    setHistory([...History, nextNum]);

    const nextOtherNum = Random(6);
    
    setOtherHistory([...otherHistory, nextOtherNum]);
    
  };

  const handleClearClick = () => {
    
    setHistory([]);

    
    setOtherHistory([]);
    console.log('처음부터');
  };

  return(
    <>
    <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
    <Board name="Player 1" color = "blue" History={History}/>
    <Board name="Player 2" color = "red" History={otherHistory}/>
    </>
  )
}

export default App;
