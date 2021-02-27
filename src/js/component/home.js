import React from "react";
import PropType from "prop-types";
import { Numeros } from "./numeros.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const NUMERITO = () => {
	setInterval(function() {
		return <Numeros numero={"1"} />;
	}, 3000);
};

//create your first component
export function Home() {
	return (
		<div>
			<Numeros />
		</div>
	);
}
