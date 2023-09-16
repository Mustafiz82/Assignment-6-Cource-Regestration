import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/header";
import Cources from "./component/Cources";
import Cart from "./component/cart";

function App() {
	const [cource, setCource] = useState([]);
	const [count, setCount] = useState(0);
	const [credit, setCredit] = useState(0);
	const [remainingCredit, setRenainingCredit] = useState(0);

	const handleClick = (item) => {
		const isExist = cource.find((courceItem) => courceItem.id == item.id);

		let count = item.price;
		let credit = item.credit_hour;

		if (!isExist) {

			if (remainingCredit < 0) {
				alert("no credet remainnig");

			} else {

				
				cource.forEach((price) => {
					count = count + price.price;
					credit = credit + price.credit_hour;
				});

				let remainingCredit = 20 - credit;

				if (remainingCredit < 0) {
					alert("no credet remainnig");
				} else {
					setRenainingCredit(remainingCredit);
					setCount(count);
					setCredit(credit);
					setCource([...cource, item]);
				}
			}

		} else {
			alert("this course is already added");

		}
	};
	return (
		<>
			<div className="bg-[#F3F3F3]">
				<div className="max-w-screen-2xl mx-auto py-12 ">
					<Header></Header>
					<div className="flex gap-4">
						<Cources
							className="w-3/4"
							handleClick={handleClick}
						></Cources>
						<Cart
							cource={cource}
							count={count}
							credit={credit}
							remainingCredit={remainingCredit}
						></Cart>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
