import React from "react";

import { Container, Row } from "react-bootstrap";

class SubHeader extends React.Component {
	render() {
		return (
			<div className='sub-header'>
				<Container>
					<Row className='align-items-center'>Empty SubHeader</Row>
				</Container>
			</div>
		);
	}
}

SubHeader.propTypes = {};

export default SubHeader;
