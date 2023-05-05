import { useState } from "react";

function HogTile({ hog }) {
	//toggle none and block
	const [showDetails, setShowDetails] = useState("none");

    function handleClick() {
        setShowDetails( showDetails === "none" ? "block" : "none")
    }

	return (
		<div onClick={() => handleClick()} >
			<h3>{hog.name}</h3>
			<img src={hog.image} alt={hog.name} width="200px" />
			<div style={{ display: showDetails }}> {/* showDetails is used here as part of CSS */}
				<p>Specialty: {hog.specialty}</p>
				<p>Weight: {hog.weight}</p>
				<p>Greased: {hog.greased ? "Greased" : "Not Greased"}</p>
				<p>Medal: {hog["highest medal achieved"]} </p>
			</div>
		</div>
	);
}

export default HogTile;
