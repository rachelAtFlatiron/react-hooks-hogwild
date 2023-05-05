import { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogForm from "./HogForm";

import hogData from "../porkers_data";

function App() {
	//state to update view when adding new hog
	const [ hogs, setHogs ] = useState(hogData)

	const addHog = (hog) => {
		setHogs([...hogs, hog])
	}

	return (
		<div className="App">
			<Nav />
			<HogForm addHog={addHog} />
			<HogList hogs={hogs} />
		</div>
	);
}

export default App;
