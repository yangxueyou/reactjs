import React, { useContext } from 'react';
import { ColorContext} from './color';

function ShowArea() {
    const { color } = useContext(ColorContext);
    return (
        <div style={{color}}>
            字体颜色
        </div>
    )
}

export default ShowArea;