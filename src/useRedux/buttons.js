import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR } from './color'

function Buttons() {

    const { dispatch } = useContext(ColorContext);
    return (
        <>
            <button onClick={() => {dispatch({type: UPDATE_COLOR, color: 'red'})}}>红色</button>
            <button onClick={() => {dispatch({type: UPDATE_COLOR, color: 'black'})}}>黑色</button>
        </>
    )
}

export default Buttons;