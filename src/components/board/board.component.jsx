import React from 'react';

import Cell from '../cell/cell.component';

import './board.styles.scss';

const Board = ({cells})=>{

    const constructCells = () =>{
        let cellGrid = [];
        for(let cell in cells){
            let newCell = <Cell key={cell} {...cells[cell]} />
            cellGrid.push(newCell);
        }
        return cellGrid;
    }
    return(
        <div className='board'>
            {constructCells()}
        </div>
    );
}

export default Board;