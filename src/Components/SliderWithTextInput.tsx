import { Col, InputNumber, Row, Slider } from 'antd';
import React, { useState } from 'react';

// The SliderWithTextInput takes multiple props:
// speed of light and Speed and time
 const SliderWithTextInput =()=> {
    const [inputValue, setInputValue] = useState();

    const onChange = (value:any) => setInputValue(value);
    return (
        <Row>
            <Col span= {12}> 
            <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
            </Col>
            <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>

        

        </Row>
    )
}

export default SliderWithTextInput



