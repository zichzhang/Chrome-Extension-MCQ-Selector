import './App.css';
import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: 'a' },
  { option: 'b' },
  { option: 'c' },
  { option: 'd' },
];

const backgroundColors = ['#016D29','#E0080B','#FFFFFF','#F3C620']; // [green,red,white,yellow]
const outerBorderWidth = 10;
const innerBorderWidth = 2;
const radiusLineWidth = 7;
const fontSize = 30;
const perpendicularText = true;

function App() {

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const prizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(prizeNumber);
    setMustSpin(true);
  }

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false)
        }}
        backgroundColors={backgroundColors}
        outerBorderWidth={outerBorderWidth}
        innerBorderWidth={innerBorderWidth}
        radiusLineWidth={radiusLineWidth}
        fontSize={fontSize}
        perpendicularText={perpendicularText}

      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
}

export default App;
