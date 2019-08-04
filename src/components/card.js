import React from "react";
const card = props => {
	return (
		<div className="max-w-sm mx-auto bg-white border rounded shadow p-2">
			{props.children}
		</div>
	);
};

export default card;
