import React from 'react';
import './App.css';
import { Alert } from 'react-bootstrap';
import SearchBox from './components/SearchBox';
import WeatherTable from './components/WeatherTable';
import WeatherView from './components/WeatherView';

function trail(){

}
function App() {
  return (
    <div className="App">
      <Alert variant={'success'}>
        Welcome
      </Alert>
      <SearchBox/>
      <WeatherTable/>
      <WeatherView/>
    </div>
  );
}

export default App;
