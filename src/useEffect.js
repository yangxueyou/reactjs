import React, { useState, useEffect } from "react";

function Example() {
    const [count, setCount] = useState(0);
    /**
     * 等于生命周期：componentDidMouont componentDidUpdate
     * 
     * 好处: 异步的、不影响视图更新
     * 
     * 坏处: 不能实时计算出视图改变
     */
    useEffect(() => {
        console.log(`useEffect => your count ${count}`)
    })

    return <div>
        <p>your count {count}</p>
        <button onClick={() => {setCount(count + 1)}}>click</button>
    </div>
}   

export default Example