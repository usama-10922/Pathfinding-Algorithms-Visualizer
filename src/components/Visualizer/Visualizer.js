import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import Node from "./Node/Node";
import { generateNewGrid } from "../../config/utils";

export default class Visualizer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			grid: generateNewGrid()
		};
	}

	render() {
		return (
			<div className='visualizer'>
				<Container>
					{this.state.grid.map((row, rowIndex) => (
						<div key={rowIndex}>
							{row.map((node, nodeIndex) => (
								<Node
									isWallNode={node.isWallnode}
									isStartNode={node.isStartNode}
									isEndNode={node.isEndNode}
								/>
							))}
						</div>
					))}
				</Container>
			</div>
		);
	}
}
