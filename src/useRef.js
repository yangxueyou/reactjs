/**
 * 1. 获取dom值
 * 2. 保存变量
 */
import React, {useRef, useEffect, useState} from 'react';

function UseRef() {
    const inputEl = useRef(null);

    const onButton = () => {
        inputEl.current.value = '点击';
        console.log(inputEl)
    }

    const [text, setText] = useState('11')

    const textRef = useRef();

    useEffect(() => {
        // 2. 保存变量
        textRef.current = text;
        console.log('---11',textRef.current)
    })

    return (
        <>
            {/* 1. 获取dom值 */}
            <input ref={inputEl} type='text'/>
            <button onClick={onButton}>点击</button>
            <br/>
            <br/>
            <input value={text} onChange={(e) => {setText(e.target.value)}}/>
        </>
    )
}

export default UseRef