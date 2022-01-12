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

  const [optionsAlpha, setOptionsAlpha] = useState(
    new Array(data.length).fill(false) // [false,false,false,false]
  );

  const [checkboxCount, setCheckboxCount] = useState(0);
  const [checkboxCountAlpha, setCheckboxCountAlpha] = useState(0);

  const [inputVariable, setInputVariable] = useState("");

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

      const prizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(prizeNumber);
      setMustSpin(true);
    } else if (format === 'alphabetic') {
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
          
        ].filter((opt, index) => optionsAlpha[index])
      );

    const prizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(prizeNumber);
    setMustSpin(true);
    } else {
      // parse inputVariable by "," and map each string into object of format { option: str }
      const otherOptions = inputVariable.replace(/\s+/g, '').split(",");//.filter(function (e) {return e != null;});
      const otherData = otherOptions.map(opt => {
        return { option: opt }
      });
      if(otherData.length > 1){
      setData(otherData);
      const prizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(prizeNumber);
      setMustSpin(true);
      }
    }
  }

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  }

  const handleOptionsChange = (event) => {    
    const updatedOptions = options.map((opt, index) => 
      index === parseInt(event.target.value) ? !opt : opt
    ); 
    setOptions(updatedOptions);
    
    if (event.target.checked) {
      setCheckboxCount(checkboxCount + 1);
    } else {
      setCheckboxCount(checkboxCount - 1);
    }
}

const handleOptionsChangeAlpha = (event) => {    
  const updatedOptionsAlpha = optionsAlpha.map((opt, index) => 
    index === parseInt(event.target.value) ? !opt : opt
  ); 
  setOptionsAlpha(updatedOptionsAlpha);
  
  if (event.target.checked) {
    setCheckboxCountAlpha(checkboxCountAlpha + 1);
  } else {
    setCheckboxCountAlpha(checkboxCountAlpha - 1);
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
            <form class="checkbox-options">
            <label for="checkbox-0">1</label><input
              type="checkbox"
              name="options"
              id="checkbox-0"
              value="0"
              checked={options[0] === true}
              onChange={handleOptionsChange}
            /> 
            <label for="checkbox-1">2</label><input
              type="checkbox"
              name="options"
              id="checkbox-1"
              value="1"
              checked={options[1] === true}
              onChange={handleOptionsChange}
            /> 
            <label for="checkbox-3">3</label><input
              type="checkbox"
              name="options"
              id="checkbox-2"
              value="2"
              checked={options[2] === true}
              onChange={handleOptionsChange}
            /> 
            <label for="checkbox-3">4</label><input
              type="checkbox"
              name="options"
              id="checkbox-3"
              value="3"
              checked={options[3] === true}
              onChange={handleOptionsChange}
            /> 
            <label for="checkbox-4">5</label><input
              type="checkbox"
              name="options"
              id="checkbox-4"
              value="4"
              checked={options[4] === true}
              onChange={handleOptionsChange}
            /> 
            <label for="checkbox-5">6</label><input
              type="checkbox"
              name="options"
              id="checkbox-5"
              value="5"
              checked={options[5] === true}
              onChange={handleOptionsChange}
            /> 
            <label for="checkbox-6">7</label><input
              type="checkbox"
              name="options"
              id="checkbox-6"
              value="6"
              checked={options[6] === true}
              onChange={handleOptionsChange}
            /> 
            <label for="checkbox-7">8</label><input
              type="checkbox"
              name="options"
              id="checkbox-7"
              value="7"
              checked={options[7] === true}
              onChange={handleOptionsChange}
            /> 
             </form>
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
            <form class="checkbox-options2">
            <label for="checkbox-0">a</label><input
              type="checkbox"
              name="options2"
              id="checkbox2-0"
              value="0"
              checked={optionsAlpha[0] === true}
              onChange={handleOptionsChangeAlpha}
            /> 
            <label for="checkbox-1">b</label><input
              type="checkbox"
              name="options2"
              id="checkbox2-1"
              value="1"
              checked={optionsAlpha[1] === true}
              onChange={handleOptionsChangeAlpha}
            /> 
            <label for="checkbox-3">c</label><input
              type="checkbox"
              name="options2"
              id="checkbox2-2"
              value="2"
              checked={optionsAlpha[2] === true}
              onChange={handleOptionsChangeAlpha}
            /> 
            <label for="checkbox-3">d</label><input
              type="checkbox"
              name="options2"
              id="checkbox2-3"
              value="3"
              checked={optionsAlpha[3] === true}
              onChange={handleOptionsChangeAlpha}
            /> 
            <label for="checkbox-4">e</label><input
              type="checkbox"
              name="options2"
              id="checkbox2-4"
              value="4"
              checked={optionsAlpha[4] === true}
              onChange={handleOptionsChangeAlpha}
            /> 
            <label for="checkbox-5">f</label><input
              type="checkbox"
              name="options2"
              id="checkbox2-5"
              value="5"
              checked={optionsAlpha[5] === true}
              onChange={handleOptionsChangeAlpha}
            /> 
            <label for="checkbox-6">g</label><input
              type="checkbox"
              name="options2"
              id="checkbox2-6"
              value="6"
              checked={optionsAlpha[6] === true}
              onChange={handleOptionsChangeAlpha}
            /> 
            <label for="checkbox-7">h</label><input
              type="checkbox"
              name="options2"
              id="checkbox2-7"
              value="7"
              checked={optionsAlpha[7] === true}
              onChange={handleOptionsChangeAlpha}
            /> 
             </form>
            <br/>
            <input 
              type="radio" 
              name="format" 
              id="radio-other"
              value="other" 
              checked={format === 'other'}
              onChange={handleFormatChange}  
            /> <label for="radio-other">Choose your options</label>
            <br/>
            <span class="others-description">(Type your options separated by commas in the box below)</span>
            <br/>
            <input 
              name="input-others"
              type="text"
              class="input-others"
              value={inputVariable}
              onChange={event => setInputVariable(event.target.value)}
              placeholder="e.g. apple,orange,mango"
            ></input>

            <br/>
          </form>
          <br/>

          <button 
            class="spin-button" 
            disabled={(checkboxCountAlpha <= 1 && format === 'alphabetic') || (checkboxCount <= 1 && format === 'numeric')  ? true : false}
            onClick={handleSpinClick}
          >SPIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
