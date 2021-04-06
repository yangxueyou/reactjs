import React, { useState } from "react";

function Example() {
    /**
     * const _state = useState(0);
     * const count = _state[0];
     * const setCount = _state[1];
     * 
     * 通过顺序来控制状态，useState不能存在条件语句中
     */
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(18);

    return <div>
        <p>your age {age}</p>
        <p>your count {count}</p>
        <button onClick={() => {setCount(count + 1)}}>click</button>
    </div>
}   

export default Example