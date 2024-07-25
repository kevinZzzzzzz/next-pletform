"use client"; // 声明该组件为客户端组件
import { useState } from "react";

function Counter(props: any) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
export default Counter;
