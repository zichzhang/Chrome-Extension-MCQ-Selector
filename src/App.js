import './App.css';
import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const initData = [
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

const App = () => {

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [format, setFormat] = useState('alphabetic');
  const [data, setData] = useState(initData);

  const handleSpinClick = () => {
    if (format === 'numeric') {
      setData(
        [
          { option: '1' },
          { option: '2' },
          { option: '3' },
          { option: '4' },
        ]
      );
    } else {
      setData(
        [
          { option: 'a' },
          { option: 'b' },
          { option: 'c' },
          { option: 'd' },
        ]
      );
    }
    
    const prizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(prizeNumber);
    setMustSpin(true);
  }

  const handleChange = (event) => {
    setFormat(event.target.value);
  }

  return (
    <div class="container">
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
      <div>
        <form>
          <input 
            type="radio" 
            value="numeric" 
            name="format"
            checked={format === 'numeric'}
            onChange={handleChange}
          /> Numeric
          <input 
            type="radio" 
            value="alphabetic" 
            name="format" 
            checked={format === 'alphabetic'}
            onChange={handleChange}  
          /> Alphabetic
        </form>
        <button class="spin-button" onClick={handleSpinClick}>SPIN</button>
      </div>
    </div>
  );
}

export default App;
