import './App.css';
import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

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
          <p>Select format</p>
          <input
            type="radio" 
            name="format"
            value="numeric" 
            checked={format === 'numeric'}
            onChange={handleFormatChange}
          /> Numeric 
          <br/>
          <input 
            type="radio" 
            name="format" 
            value="alphabetic" 
            checked={format === 'alphabetic'}
            onChange={handleFormatChange}  
          /> Alphabetic
        </form>
        <br/>
        <form>
          <p>Select options</p>
          <input
            type="checkbox"
            name="options"
            value="0"
            checked={options[0] === true}
            onChange={handleOptionsChange}
          /> First 
          <br/>
          <input
            type="checkbox"
            name="options"
            value="1"
            checked={options[1] === true}
            onChange={handleOptionsChange}
          /> Second
          <br/>
          <input
            type="checkbox"
            name="options"
            value="2"
            checked={options[2] === true}
            onChange={handleOptionsChange}
          /> Third
          <br/>
          <input
            type="checkbox"
            name="options"
            value="3"
            checked={options[3] === true}
            onChange={handleOptionsChange}
          /> Fourth
        </form>
        <button class="spin-button" onClick={handleSpinClick}>SPIN</button>
      </div>
    </div>
  );
}

export default App;
