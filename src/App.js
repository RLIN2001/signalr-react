import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
	Link,
} from "react-router-dom";
import Test1 from "./pages/test1";
import Test2 from "./pages/test2";
import Layout from "./components/Layout";
import Test3 from "./pages/test3";
import { data } from "./signals";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="test1" element={<Test1 />} />
					<Route path="test2" element={<Test2 />} />
					<Route path="test3" element={<Test3 />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</Router>
	);
}

function Home() {
	return (
		<>
			<h2>Welcome to the Home Page!</h2>
			<button
				onClick={() => {
					data.value = "data passed";
				}}
			>
				Click
			</button>
		</>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>

			{<p>{data.value}</p>}
			<p>
				<Link to="/">Go to the home page</Link>
			</p>
		</div>
	);
}
