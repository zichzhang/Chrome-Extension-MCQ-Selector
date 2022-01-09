import './App.css';
import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { darkPastelPalette } from './utils/ColorPaletteUtils';

const backgroundColors = darkPastelPalette;
const outerBorderWidth = 10;
const innerBorderWidth = 2;
const radiusLineWidth = 7;
const fontSize = 30;
const perpendicularText = true;

const App = () => {

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [format, setFormat] = useState('alphabetic');
  const [data, setData] = useState([
    { option: 'a' },
    { option: 'b' },
    { option: 'c' },
    { option: 'd' },
  ]);
  const [options, setOptions] = useState(
    new Array(data.length).fill(false) // [false,false,false,false]
  );

  const handleSpinClick = () => {
    if (format === 'numeric') {
      setData(
        [
          { option: '1' },
          { option: '2' },
          { option: '3' },
          { option: '4' },
        ].filter((opt, index) => options[index])
      );
    } else {
      setData(
        [
          { option: 'a' },
          { option: 'b' },
          { option: 'c' },
          { option: 'd' },
        ].filter((opt, index) => options[index])
      );
    }

    const prizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(prizeNumber);
    setMustSpin(true);
  }

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  }

  const handleOptionsChange = (event) => {
    const updatedOptions = options.map((opt, index) => 
      index == parseInt(event.target.value) ? !opt : opt
    ); 
    setOptions(updatedOptions);
    
  }

  return (
    <div>
      <div class="header-container">
        <span class="letter-M">M</span>
        <span class="letter-A">A</span>
        <span class="letter-J">J</span>
        <span class="letter-I">I</span>
        <span class="letter-Q">Q</span>
        <span class="word-wheel"> Wheel</span>
        <h4>Desperate times calls for desperate measures ...</h4>
      </div>
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
        <div class="forms-container">
          <form class="radio-format">
            <p>Select format</p>
            <input
              type="radio" 
              name="format"
              id="radio-numeric"
              value="numeric" 
              checked={format === 'numeric'}
              onChange={handleFormatChange}
            /> <label for="radio-numeric">Numeric</label> 
            <br/>
            <input 
              type="radio" 
              name="format" 
              id="radio-alphabetic"
              value="alphabetic" 
              checked={format === 'alphabetic'}
              onChange={handleFormatChange}  
            /> <label for="radio-alphabetic">Alphabetic</label>
          </form>
          <br/>
          <form class="checkbox-options">
            <p>Select options</p>
            <input
              type="checkbox"
              name="options"
              id="checkbox-0"
              value="0"
              checked={options[0] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-0">First</label> 
            <br/>
            <input
              type="checkbox"
              name="options"
              id="checkbox-1"
              value="1"
              checked={options[1] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-1">Second</label>
            <br/>
            <input
              type="checkbox"
              name="options"
              id="checkbox-2"
              value="2"
              checked={options[2] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-3">Third</label>
            <br/>
            <input
              type="checkbox"
              name="options"
              id="checkbox-3"
              value="3"
              checked={options[3] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-3">Fourth</label>
          </form>
          <button class="spin-button" onClick={handleSpinClick}>SPIN</button>
        </div>
      </div>
    </div>
  );
}

export default App;
