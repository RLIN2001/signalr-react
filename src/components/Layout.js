import { Link, Outlet } from "react-router-dom/dist";

export default function Layout({ children }) {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/test1">Test1</Link>
					</li>
					<li>
						<Link to="/test2">Test2</Link>
					</li>
					<li>
						<Link to="/test3">Test3</Link>
					</li>
				</ul>
			</nav>
			<hr />
			<Outlet />
		</div>
	);
}
