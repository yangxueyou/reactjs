/**
 * shouldComponentUpdate 的效果 --- useMemo
 */

import React, { useState, useMemo, useCallback } from 'react';

function UseMemo() {
    const [xiaoming, setXiaoming] = useState('xiaoming');
    const [xiaoli, setXiaoli] = useState('xiaoLi');

    return (
        <>
            <button onClick={() => {setXiaoming(new Date().getTime())}}>小明</button>
            <button onClick={() => {setXiaoli(new Date().getTime() + '小李')}}>小李</button>
            <Child name={xiaoming}>
                {xiaoli}
            </Child>
        </>
    )
}

function Child({name, children}) {

    function chengeXiaoming() {
        console.log('xiaoming');

        return name + 'xiaoming'
    }
    // 只有当name放生变化当时候才执行chengeXiaoming这个方法
    const actionXiaoming = useMemo(() => chengeXiaoming(),[name]) 

    // useCallback 和 useMemo

    // 相同点：useCallback 和 useMemo 都是性能优化的手段，类似于类组件中的 shouldComponentUpdate，
    // 在子组件中使用 shouldComponentUpdate， 判定该组件的 props 和 state 是否有变化，从而避免每次父组件render时都去重新渲染子组件。

    // 区别：useCallback 和 useMemo 的区别是useCallback返回一个函数，
    // 当把它返回的这个函数作为子组件使用时，可以避免每次父组件更新时都重新渲染这个子组件，

    const [buttonText, setButtonText] = useState('111')
    const renderButton = useCallback(
        () => (
            <button type="link">
            {buttonText}
            </button>
        ),
        [buttonText]    // 当buttonText改变时才重新渲染renderButton
    );

    // useMemo返回的的是一个值，用于避免在每次渲染时都进行高开销的计算。例：
    // 仅当num改变时才重新计算结果
    const [count, setCount] = React.useState(0);
    const calcValue = React.useMemo(() => {
      return Array(100000).fill('').map(v => /*一些大量计算*/ v);
    }, [count]);

    return (
        <>
            <div>{actionXiaoming}</div>
            <div>{children}</div>
        </>
    )
}

export default UseMemo