import React, { useEffect, useState } from "react";
import Cource from "./cource";

const Cources = () => {
	const [cource, setCource] = useState([]);

	useEffect(() => {
		fetch("cources.json")
			.then((res) => res.json())
			.then((json) => setCource(json));
	}, []);

	return (
		<div className="grid grid-cols-3 gap-5 w-3/4">
			{cource.map((item) => (
				<Cource
                    
					cource={item}
					key={item.id}
                    
				></Cource>
			))}
		</div>
	);
};

export default Cources;
