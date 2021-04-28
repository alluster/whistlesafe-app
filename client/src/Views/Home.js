import React, { Suspense, useContext, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../device';

import Container from '../Components/Container';
import Hero from '../Components/Hero';
import Button from '../Components/Button';
import { AppContext } from '../context/Context';
const Spinner = React.lazy(() => import('../Components/Spinner'));
const ButtonRow = styled.div`
	display: flex;
	flex-direction: row;
	@media ${device.mobileM} {
		flex-direction: column;
    }
`;




const Home = () => {
	const { GetOrg } = useContext(AppContext);
	useEffect(() => {
		GetOrg()
		return () => {
		}
	}, [])
	return (
		<Suspense fallback={<Spinner />}>
			<Hero title="File a new report" ingress="By clicking Create new report you are redirected to a secure whistleblow form that allows you to file an anonymous report of any suspicious of misconduct in your organisation." >
				<ButtonRow>
					<Button to="/report"><h4>Create a new report</h4></Button>
				</ButtonRow>

			</Hero>
			<Container >
				<h1 style={{ marginTop: "90px"}}>Direct way for emplyees and stakeholders to report suspicious of misconduct anonymously</h1>
				<h4 style={{ marginTop: "30px"}}>As from 2021 every organisation with over 50 employees will be requested to enable anonymous reporting for employees and stakeholders</h4>			
				<h5 style={{ marginTop: "20px"}}>What is Whistleblowing?</h5>
				<p>Ipsum lorem doloris particia maximus lorem  doloris particia maximus lorem doloris particia maximus lorem. Ipsum lorem doloris particia maximus lorem  doloris particia maximus lorem doloris particia maximus lorem.</p>
				<ButtonRow style={{ marginTop: "90px"}}>
					<Button to="/report" ><h4>Follow my report</h4></Button>
				</ButtonRow>

			</Container>
		</Suspense>

	);
}

export default Home;
