import React from "react";
import ToDo from "./ToDo.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<ToDo/>
		</div>
	);
};

export default Home;
