import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";
// import { FiDollarSign } from "react-icons/fa";

const Cource = ({ cource ,handleClick}) => {
	const { image, course_title, course_description, price, credit_hour } =
		cource;
	// console.log(cource.course_title);
	return (
		<div className="text-justify">
			<div className="card card-compact  bg-base-100 shadow-xl p-4 first-letter: ">
				<figure>
					<img
						className="h-52 w-full"
						src={image}
						alt="Shoes"
					/>
				</figure>
				<div className="py-4 space-y-4">
					<h2 className="card-title text-left h-14">{course_title}</h2>
					<p className="min-h-[96px]">{course_description}</p>
					<div className="text-lg flex justify-between items-center">
						<div className="flex gap-4">
							<span>
								<FiDollarSign className="text-2xl"></FiDollarSign>
							</span>
							<span>Price : {price}</span>
						</div>
						<div className="flex gap-4">
							<span>
								<HiOutlineBookOpen className="text-2xl"></HiOutlineBookOpen>
							</span>
							<span>Credit : {credit_hour}hr</span>
						</div>
					</div>
					<div className="card-actions justify-end">
						<button onClick={() => {handleClick(cource)}} className="btn btn-primary w-full">Select</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cource;
