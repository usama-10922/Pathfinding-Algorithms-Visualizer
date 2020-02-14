import React from "react";

import "./styles/App.scss";

import Header from "./components/Header/Header";
import SubHeader from "./components/Header/SubHeader";
import Visualizer from "./components/Visualizer/Visualizer";
import { Container, Row, Col } from "react-bootstrap";

function App() {
	return (
		<div className='App'>
			<Header />
			<SubHeader />
			<Container className='visualizer__container'>
				<Row className='visualizer__row'>
					<Col>
						<Visualizer />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
