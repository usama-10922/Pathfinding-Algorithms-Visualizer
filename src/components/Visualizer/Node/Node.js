import React from "react";
import classnames from "class-names";

import { gridSize } from "../../../config/utils";

const Node = props => {
	const classNames = classnames({
		wall: props.isWallNode,
		start: props.isStartNode,
		end: props.isEndNode,
		node: true
	});

	const nodeWidth = `${100 / gridSize.cols}%`;
	return (
		<div
			className={classNames}
			style={{ width: nodeWidth, height: "100%" }}></div>
	);
};

export default Node;
