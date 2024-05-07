import { useState } from "preact/hooks";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className={"text-3xl font-bold text-yellow-400"}>{count}</h1>
      <button className={"border px-4 py-2 text-xl"} onClick={() => setCount(count => count + 1)}>+</button>
      <button className={"border px-4 py-2 text-xl"} onClick={() => setCount(count => count - 1)}>-</button>

        <button className={"text"}>

        </button>
    </>
  );
}
