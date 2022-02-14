import React, { Component } from "react";

import Header from "../components/header/";
import Form from "./form/";

export default class Main extends Component {
	render() {
		return (
			<div>
                <Header />
                <Form />
			</div>
		);
	}
}