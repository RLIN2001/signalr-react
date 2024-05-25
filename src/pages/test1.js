import React from "react";
import { data } from "../signals";

export default function Test1() {
	return (
		<div>
			{<p>{data.value}</p>}
			<p>Test1</p>
		</div>
	);
}
