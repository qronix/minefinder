import React from 'react';

import './cell.styles.scss';

const Cell = ({bomb})=>(
    <div className={`cell ${bomb ? 'isBomb' : null}`}>
    </div>
);

export default Cell;