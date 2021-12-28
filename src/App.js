import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function Random(n){
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);

  const handleRollClick = () => {
    const nextNum = Random(6);
    setNum(nextNum);
    console.log(nextNum);
  };

  const handleClearClick = () => {
    setNum(1);
    console.log('처음부터');
  };

  return (
    <>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="blue" num={num} />
    </>
  );
}

export default App;
