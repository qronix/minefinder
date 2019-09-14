import React from 'react';

import './numericaldisplay.styles.scss';

const NumericalDisplay = ({value}) => (
    <div className='numerical-display'>
        <span>{value}</span>
    </div>
);

export default NumericalDisplay;