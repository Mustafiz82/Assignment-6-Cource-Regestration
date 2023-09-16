import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/header";
import Cources from "./component/Cources";
import Cart from "./component/cart";

function App() {
	return (
		<>
			<div className="bg-[#F3F3F3]">
				<div className="max-w-screen-2xl mx-auto py-12 ">
					<Header></Header>
					<div className="flex gap-4">
					<Cources className="w-3/4"></Cources>
					<Cart ></Cart>

					</div>
				</div>
			</div>
		</>
	);
}

export default App;
