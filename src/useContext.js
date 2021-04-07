// useContext 解决父子组件传值问题
import React, { useState, createContext, useContext } from "react";
// 创建上下文
const CountContext = createContext();
// 工作中需要创建一个文件来写这个子组件
function Counter() {
    let count = useContext(CountContext)

    return <h2>{count}</h2>
}

function Example() {

    const [count, setCount] = useState(0);

    return (
        <>
            <p>your count {count}</p>
            <button onClick={() => {setCount(count + 1)}}>click</button>
            <CountContext.Provider value={count}>
                {/* 这里面放子组件，count被共享了 */}
                <Counter/>
            </CountContext.Provider>
        </>
    )
}   

export default Example