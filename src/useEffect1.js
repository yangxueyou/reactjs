import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Index() {
    /**
     * 第二个参数空数组的时候：只运行一次的 effect（仅在组件挂载和卸载时执行）
     * 也可以写参数[count]，只有当参数变化的时候才会执行return方法
     */
    useEffect(() => {
        console.log('Index => Inner')
        return () => {
            console.log('Index => out')
        }
    },[])

    return <h2>首页</h2>
}

function List() {

    useEffect(() => {
        console.log('useEffer => List')
    })

    return <h2>列表</h2>
}

function Example() {
    const [count, setCount] = useState(0);
    /**
     * 当不写第二个参数的时候，每次执行都会执行
     */
    useEffect(() => {
        console.log(`useEffect => your count ${count}`)
    })

    return (
        <>
            <p>your count {count}</p>
            <button onClick={() => {setCount(count + 1)}}>click</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list" component={List} />
            </Router>
        </>
    )
}   

export default Example