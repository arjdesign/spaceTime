import { Col } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import Charts from './Components/Charts/Charts';
import Header from './Components/Header';
import SliderWithTextInput from './Components/SliderWithTextInput';

function App() {
  return (
    <div className="App">
      <Header/>
      <Col span = {12}> 
      
      <SliderWithTextInput/>
      <Charts/>
      
      </Col>
      
    </div>
  );
}

export default App;
