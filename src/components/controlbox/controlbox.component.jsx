import React from 'react';

import NumericalDisplay from '../numericaldisplay/numericaldisplay.component';


import './controlbox.styles.scss';

const ControlBox = ()=>(
    <div className='control-box'>
        <p>I am controlbox</p>
        <NumericalDisplay value={1234}/>
    </div>
);

export default ControlBox;