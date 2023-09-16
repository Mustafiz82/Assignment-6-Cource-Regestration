import React, { useEffect, useState } from "react";
import Cource from "./cource";

const Cources = ({handleClick}) => {
	const [cource, setCource] = useState([]);

	useEffect(() => {
		fetch("cources.json")
			.then((res) => res.json())
			.then((json) => setCource(json));
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-3/4 ">
			{cource.map((item) => (
				<Cource
                    
					cource={item}
					key={item.id}
                    handleClick={handleClick}
                    
				></Cource>
			))}
		</div>
	);
};

export default Cources;
