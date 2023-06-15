import React from 'react';

const Square = ({squares, index, onSquareClick}) => {

    return (
        <button className="square" 
                onClick={() => onSquareClick(index)}>
    )