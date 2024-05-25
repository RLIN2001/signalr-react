import { signal } from "@preact/signals";
import { counter } from "../signals";

export default function Test3() {
	const value = counter.value;

	const increment = () => {
		counter.value++;
	};

	return (
		<div>
			<p>Count: {value}</p>
			<button onClick={increment}>click me</button>
		</div>
	);
}
