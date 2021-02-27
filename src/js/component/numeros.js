import React from "react";
import PropType from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Numeros = props => {
	return (
		<div className="col-md-3">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{props.numero}</h5>
				</div>
			</div>
		</div>
	);
};
Numeros.propTypes = {
	numero: PropType.string
};
