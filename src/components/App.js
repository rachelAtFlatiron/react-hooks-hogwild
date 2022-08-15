import React from "react";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";

import hogs from "../porkers_data";

function App() {
	console.log(hogs);
	return (
		<div className="App">
			<Nav />
			<HogsContainer hogs={hogs} />
		</div>
	);
}

export default App;
