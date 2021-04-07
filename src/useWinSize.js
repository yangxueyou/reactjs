/**
 * 自定义hook -- 获取窗口大小
 * useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
 */
import React, {useState, useEffect, useCallback} from 'react';

function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[])   

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    },[])

    return size
}

function WinSize() {
    const size = useWinSize();

    return <div>页面size{size.width} ** {size.height}</div>
}

export default WinSize