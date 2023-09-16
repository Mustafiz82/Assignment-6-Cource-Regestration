import React from "react";

const Cart = () => {
	return (
		<div className="p-4 text-base bg-white space-y-4 w-1/4">
			<h2 className="text-lg text-blue-500 font-bold">Credit Hour Remaining {0} hr</h2>
			<hr />
			<h2 className="font-bold text-xl ">Course Name</h2>
			<ol>
				<li>1 Introduction to c programming 3 Software Engineering</li>
				<li>2 Introduction to C++ for DSA</li>
				<li>3 Software Engineering</li>
			</ol>
            <hr />
            <p>Total Credit Hour : {13}</p>
            <hr />
            <p>Total Price : 48000 USD</p>
		</div>
	);
};

export default Cart;
