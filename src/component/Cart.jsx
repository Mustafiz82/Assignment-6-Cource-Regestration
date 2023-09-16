import PropTypes from 'prop-types';
const Cart = ({ cource ,count ,credit, remainingCredit }) => {

    console.log(count);
    console.log(credit);
    console.log(remainingCredit);

	return (
		<div className="p-4 text-base bg-white space-y-4 w-full lg:w-1/4 text-center lg:text-left">
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

Cart.propTypes = {
	cource: PropTypes.array.isRequired ,
	count: PropTypes.number,
	credit: PropTypes.number,
	remainingCredit : PropTypes.number

}

export default Cart;
