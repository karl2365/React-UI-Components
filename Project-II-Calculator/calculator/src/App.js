import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/Display';
import Number from "./components/ButtonComponents/Number";
import Operation from "./components/ButtonComponents/Operation";
import Action from "./components/ButtonComponents/Action";

const App = () => {
  return (
    <div className='container'>
      <Display />
      <Action action="clear" actionStyle="clear" />
      <Operation operation='%' buttonStyle='operation'  />
      <Number number='7'  buttonStyle='number'  />
      <Number number='8' buttonStyle='number'  />
      <Number number='9' buttonStyle='number'  />
      <Operation operation='X' buttonStyle='operation' />
      <Number number='4' buttonStyle='number'  />
      <Number number='5' buttonStyle='number'  />
      <Number number='6' buttonStyle='number'  />
      <Operation operation='-'  buttonStyle='operation' />
      <Number number='1' buttonStyle='number'  />
      <Number number='2' buttonStyle='number'  />
      <Number number='3' buttonStyle='number'  />
      <Operation operation='+' buttonStyle='operation'  />
      <Action action="0" actionStyle="zero" />
      <Operation operation='=' buttonStyle='operation'  />

    </div>
  );
};

export default App;
