import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/Display';
import Number from "./components/ButtonComponents/Number";
import Action from "./components/ButtonComponents/Action";

const App = () => {
  return (
    <div className='container'>
      <Display />
      <Action action="clear" actionStyle="clear" />
      <Number number='&divide;' buttonStyle='operation'  />
      <Number number='7'  buttonStyle='number'  />
      <Number number='8' buttonStyle='number'  />
      <Number number='9' buttonStyle='number'  />
      <Number number='X' buttonStyle='operation' />
      <Number number='4' buttonStyle='number'  />
      <Number number='5' buttonStyle='number'  />
      <Number number='6' buttonStyle='number'  />
      <Number number='-'  buttonStyle='operation' />
      <Number number='1' buttonStyle='number'  />
      <Number number='2' buttonStyle='number'  />
      <Number number='3' buttonStyle='number'  />
      <Number number='+' buttonStyle='operation'  />
      <Action action="0" actionStyle="zero" />
      <Number number='=' buttonStyle='operation'  />

    </div>
  );
};

export default App;
