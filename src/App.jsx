import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Stats from "./components/stats/Stats";

const App = () => {
	return (
		<main>
			<Sidebar />
			<Stats />
		</main>
	);
};

export default App;
