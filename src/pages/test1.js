import React from "react";
import { data } from "../signalr";

export default function Test1() {
	return (
		<div>
			{<p>{data.value}</p>}
			<p>Test1</p>
		</div>
	);
}
