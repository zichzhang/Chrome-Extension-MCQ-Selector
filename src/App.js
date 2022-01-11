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
    { option: 'e' },
    { option: 'f' },
    { option: 'g' },
    { option: 'h' },
  ]);
  const [options, setOptions] = useState(
    new Array(data.length).fill(false) // [false,false,false,false]
  );
  const [checkboxCount, setCheckboxCount] = useState(0);

  const handleSpinClick = () => {
    if (format === 'numeric') {
      setData(
        [
          { option: '1' },
          { option: '2' },
          { option: '3' },
          { option: '4' },
          { option: '5' },
          { option: '6' },
          { option: '7' },
          { option: '8' },
        ].filter((opt, index) => options[index])
      );
    } else {
      setData(
        [
          { option: 'a' },
          { option: 'b' },
          { option: 'c' },
          { option: 'd' },
          { option: 'e' },
          { option: 'f' },
          { option: 'g' },
          { option: 'h' },
          
        ].filter((opt, index) => options[index])
      );
    }

    const prizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(prizeNumber);
    setMustSpin(true);
    console.log(checkboxCount);
  }

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  }

  const handleOptionsChange = (event) => {    
    const updatedOptions = options.map((opt, index) => 
      index == parseInt(event.target.value) ? !opt : opt
    ); 
    setOptions(updatedOptions);
    
    if (event.target.checked) {
      setCheckboxCount(checkboxCount + 1);
    } else {
      setCheckboxCount(checkboxCount - 1);
    }
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
            <br/>
            <input 
              type="radio" 
              name="format" 
              id="radio-other"
              value="other" 
              checked={format === 'other'}
              onChange={handleFormatChange}  
            /> <label for="radio-other">Other</label>
            <br/>
            <span class="others-description">(type your options separated by commas in the box below and click update)</span>
            <br/>
            <input 
            type="text"
            class="input-others"
            ></input>
            <button 
            class="update-button" 
            disabled={checkboxCount <= 1 ? true : false}
            >Update
            </button>
            <br/>
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
            <input
              class="checkbox-4"
              type="checkbox"
              name="options"
              id="checkbox-4"
              value="4"
              checked={options[4] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-4">Fifth</label>  
            <br/>
            <input
              type="checkbox"
              name="options"
              id="checkbox-1"
              value="1"
              checked={options[1] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-1">Second</label>
            <input
              class="checkbox-5"
              type="checkbox"
              name="options"
              id="checkbox-5"
              value="5"
              checked={options[5] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-5">Sixth</label> 
            <br/>
            <input
              type="checkbox"
              name="options"
              id="checkbox-2"
              value="2"
              checked={options[2] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-3">Third</label>
            <input
              class="checkbox-6"
              type="checkbox"
              name="options"
              id="checkbox-6"
              value="6"
              checked={options[6] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-6">Seventh</label> 
            <br/>
            <input
              type="checkbox"
              name="options"
              id="checkbox-3"
              value="3"
              checked={options[3] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-3">Fourth</label>
            <input
              class="checkbox-7"
              type="checkbox"
              name="options"
              id="checkbox-7"
              value="7"
              checked={options[7] === true}
              onChange={handleOptionsChange}
            /> <label for="checkbox-7">Eighth</label> 
          </form>
          <button 
            class="spin-button" 
            disabled={checkboxCount <= 1 ? true : false}
            onClick={handleSpinClick}
          >SPIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
