import { createSignal } from "solid-js";

const [count, setCount] = createSignal(0);

setCount(1);

console.log(count());