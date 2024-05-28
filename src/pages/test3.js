import { signal } from "@preact/signals";
import { count, counter } from "../signals";
import { useSignals } from "@preact/signals-react/runtime";

export default function Test3() {
	useSignals();
	const increment = () => {
		counter.value++;
	};

	return (
		<div>
			<p>Count: {counter.value}</p>
			<button onClick={increment}>click me</button>
		</div>
	);
}
