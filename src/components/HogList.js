import { useState, useEffect } from "react";
import HogTile from "./HogTile";

function HogList({ hogs }) {
	//greased filter functionality
	const [greased, setGreased] = useState(true);
	//state sort by name or by weight
	const [sortBy, setSortBy] = useState("weight"); //name or weight
    
    
    //useEffect to run side fx when greased changes

    // const [ filterHogs, setFilterHogs ] = useState(hogs)
    // useEffect(() => {
    //     setFilterHogs([...hogs].filter((el) => {
    //         return el.greased === greased;
    //     }))
    // }, [greased, hogs]) 



    //filter hogs by greased
	const greaseFilter = [...hogs].filter((el) => {
		return el.greased === greased;
	}); 

    //sorts through FILTERED hogs
	const sortHogs = [...greaseFilter].sort((a, b) => {
		if (sortBy === "weight") {
			//sort by weight
			return a.weight - b.weight;
		} else {
			//sort by name
			return a.name.localeCompare(b.name);
		}
	});

	const handleSortBy = () => {
		setSortBy(sortBy === "name" ? "weight" : "name");
	};

	return (
		<div>
			<h1>HogList</h1>
			<button onClick={() => setGreased((prev) => !prev)}>
				{greased ? "Show not greased" : "Show greased"}
			</button>

			<button onClick={handleSortBy}>
				Sort by {sortBy === "name" ? "weight" : "name"}
			</button>
            {/* be careful of which sorted array of hogs you are mapping over */}
			{sortHogs.map((el, i) => {
				return <HogTile hog={el} key={i} />;
			})}
		</div>
	);
}

export default HogList;
