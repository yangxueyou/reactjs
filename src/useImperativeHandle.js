// 在本例中，渲染 <FancyInput ref={inputRef} /> 的父组件可以调用 inputRef.current.focus()

// 在大多数情况下，应当避免使用 ref 这样的命令式代码

function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef} />;
}
FancyInput = forwardRef(FancyInput);

