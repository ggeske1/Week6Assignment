import React, {useState} from 'react';

function App(){
  const [temperature, setTemperature] = useState('');
  const [convertedTemp, setConvertedTemp] = useState('');

  const handleInputChange = (event) =>{
    setTemperature(event.target.value);
  }

  const convertToFahrenheit = () => {
    const fahrenheit = (temperature * (9/5)) +32;
    setConvertedTemp(fahrenheit + " degrees Fahrenheit");
  };
  const convertToCelsius = () => {
    const celsius = (temperature - 32)*(5/9);
    setConvertedTemp(celsius + " degrees Celsius");
  };

  return(
    <div style= {{textAlign: 'center', marginTop: '50px'}}>
      <h1>Temperature Converter</h1>
      <input type="number" value={temperature} onChange={handleInputChange}/>
      <button onClick={convertToFahrenheit} style={{margin: '5px'}}>Convert To Fahrenheit</button>
      <button onClick={convertToCelsius} style={{margin: '5px'}}>Convert To Celsius</button>
      <h2>Result: {convertedTemp}</h2>
    </div>
  );

}
export default App;