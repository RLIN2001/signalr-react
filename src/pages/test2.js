import React, { useState } from "react";
import { count, data, double } from "../signals";

export default function Test2() {
	const [value, setValue] = useState(data.value);

	console.log(count.value);
	console.log(double.value);
	return (
		<div>
			<p>{value}</p>
			<p>Test2</p>
			<button
				onClick={() => {
					const newValue = "new value";
					setValue(newValue);
					data.value = newValue;
				}}
			>
				test
			</button>
		</div>
	);
}
