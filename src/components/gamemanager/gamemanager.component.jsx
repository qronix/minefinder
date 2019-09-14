import React, { useState, useEffect } from 'react';

import Board from '../board/board.component';
import ControlBox from '../controlbox/controlbox.component';

const GameContainer = () => {

    const INITIAL_STATE = {
        gameStarted: false,
        bombs: 0,
        secondsPassed: 0,
        paused: false,
        hasWon: false,
        hasLost: false,
        playing: false,
        cells: {}
    }

    const [gameState, setGameState] = useState(INITIAL_STATE);

    const generateBoard = (length, width)=> {
        const SIZE = length * width;
        let maxBombs = getMaxBombs(SIZE);
        let generateBomb = determineIfBomb(maxBombs);
        let cells = {};

        for(let i=0; i<SIZE; i++){
            let cell = {
                id: i,
                bomb: generateBomb(),
                bombsNear: 0,
                flagged: false,
                revealed: false
            }
            cells[i] = cell;
        }
        setGameState({...gameState, cells});
        console.dir(gameState.cells);
    };

    const determineIfBomb = MAX_BOMBS => {
        let bombsRemaining = MAX_BOMBS;

        return ()=>{
            if(bombsRemaining > 0){
				let isBomb = Math.round(Math.random()) === 1 ? true : false;
				if(isBomb) bombsRemaining--;
                return isBomb;
            }else{
                return false;
            }
        }
    }

    const getMaxBombs = size => (Math.floor(size*0.3));

    useEffect(()=>{
        generateBoard(10,10);
    },[]);

    return(
        <div className='gamecontainer'>
            <ControlBox/>
            <Board cells={gameState.cells}/>
        </div>
    )
};

export default GameContainer;