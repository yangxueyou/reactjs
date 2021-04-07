import React, { useState, useEffect, useRef } from "react";

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

    return (
        <>
            <p>your count {count}</p>
            <button onClick={() => {setCount(count + 1)}}>click</button>
        </>
    )
}

export default Example

/**
 * Q: 依赖频繁变化
 * 下面的代码通常会引起 Bug
 */
function CounterBad() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const id = setInterval(() => {
        setCount(count + 1); // 这个 effect 依赖于 `count` state
      }, 1000);
      return () => clearInterval(id);
    }, []); // 🔴 Bug: `count` 没有被指定为依赖
  
    return <h1>{count}</h1>;
}

/**
 * 解决上面的问题
 */
function CounterGood() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const id = setInterval(() => {
        setCount(c => c + 1); // ✅ 在这不依赖于外部的 `count` 变量
      }, 1000);
      return () => clearInterval(id);
    }, []); // ✅ 我们的 effect 不使用组件作用域中的任何变量
  
    return <h1>{count}</h1>;
}

/**
 * 1. 万不得已的情况下，如果你想要类似 class 中的 this 的功能， 使用ref
 * 2. 仅当你实在找不到更好办法的时候才这么做，因为依赖于变更会使得组件更难以预测
 */
function ExampleRef(props) {
    // 把最新的 props 保存在一个 ref 中
    const latestProps = useRef(props);
    useEffect(() => {
      latestProps.current = props;
    });
  
    useEffect(() => {
      function tick() {
        // 在任何时候读取最新的 props
        console.log(latestProps.current);
      }
  
      const id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }, []); // 这个 effect 从不会重新执行
}

/**
 * 一般来说，下面代码是不安全。
 */
function ExampleSafeBad({ someProp }) {
    function doSomething() {
      console.log(someProp);
    }
  
    useEffect(() => {
      doSomething();
    }, []); // 🔴 这样不安全（它调用的 `doSomething` 函数使用了 `someProp`）
}

/**
 * 解决上面的问题
 */
function ExampleSafeGood({ someProp }) {
    useEffect(() => {
      function doSomething() {
        console.log(someProp);
      }
  
      doSomething();
    }, [someProp]); // ✅ 安全（我们的 effect 仅用到了 `someProp`）
}