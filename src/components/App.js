import React, { useState } from "react";
import Nav from "./Nav";
import Tiles from './Tiles'
import Filter from './Filter'
import 'bootstrap/dist/css/bootstrap.min.css';
import hogs from "../porkers_data";

function App() {
	const [grease, setGrease] = useState("all")
	const onChange = (e) => {
		setGrease(e.target.value)
	}
	console.log(grease);
	return (
		<div className="App container">
			
			<Nav />
			<Filter onChange={onChange}/>
			<Tiles grease={grease} hogs={hogs}/>
		</div>
	);
}

export default App;
