import React, { useState } from "react";

const Cart = ({ cource ,count ,credit, remainingCredit }) => {

    console.log(count);
    console.log(credit);
    console.log(remainingCredit);

	return (
		<div className="p-4 text-base bg-white space-y-4 w-1/4">
			<h2 className="text-lg text-blue-500 font-bold">
				Credit Hour Remaining {remainingCredit} hr
			</h2>
			<hr />
			<h2 className="font-bold text-xl ">Course Name</h2>

			{cource.map((item, idx) => (
				<li
					className="list-none"
					key={item.id}
				>
					{idx + 1}. {item.course_title}
				</li>
			))}

			<hr />
			<p>Total Credit Hour : {credit}</p>
			<hr />
			<p>Total Price : {count} USD</p>
		</div>
	);
};

export default Cart;
