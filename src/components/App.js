import React, { useState } from "react";
import Nav from "./Nav";
import Tiles from './Tiles'
import Filter from './Filter';
import Sort from './Sort';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import hogs from "../porkers_data";
import { useEffect } from "react/cjs/react.production.min";

function App() {
	const [grease, setGrease] = useState("all")
	const [sort, setSort] = useState("name")
	const [myHogs, setHogs] = useState(hogs);

	const onFilter = (e) => {
		let target_val = e.target.value === "true";
		setGrease(target_val)
	}

	const onSort = (e) => {
		console.log(sort);
		setSort(e.target.value);
	}


	const formSubmit = (e) => {
		e.preventDefault();
		let name = e.target.name.value;
		let weight = e.target.weight.value;
		let comment = e.target.comment.value;
		let greased = e.target.grease.value
		let award = e.target.award.value;
		let image = e.target.image.value;
		let newHog = {
			name,
			weight,
			"speciality": comment,
			greased,
			"highest medal achieved": award,
			image
		}
		setHogs(myHogs => [...myHogs, newHog])
	}

	return (
		<div className="App container">
			<Nav />
			<Form handleSubmit={formSubmit}/>
			<Sort onChange={onSort} />
			<Filter onChange={onFilter}/>
			<Tiles grease={grease} sort={sort} hogs={myHogs}/>
		</div>
	);
}

export default App;
