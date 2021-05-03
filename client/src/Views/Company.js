import React, { Suspense, useContext, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams

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




const Company = () => {
	let { company } = useParams();
	const { GetOrg } = useContext(AppContext);
	console.log(company)
	useEffect(() => {
		GetOrg(company)
		return () => {
		}
	}, [])
	return (
		<Suspense fallback={<Spinner />}>
			<Hero image="https://images.unsplash.com/photo-1552083974-186346191183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" title="Anything on your mind?" ingress="Together we are committed for a safer, equal and transparent work environment. Safety and open culture is in the core of our work. We value respect and safety of everyone affected our business." >
				<ButtonRow>
					<Button to={`/report/${company}`}><h4>Create a new message</h4></Button>
				</ButtonRow>

			</Hero>
			<Container >
				<h4 style={{ marginTop: "60px"}}>We are all committed to transparency and equality.</h4>
				<h1 style={{ marginTop: "10px"}}>Our Whistleblowing service</h1>	
				<h4 style={{ marginTop: "30px"}}>Whistleblowing service can be used when you have concern about something that doesn't align with our company values, ethics or is legally suspicious or may affect someones health.</h4>			
				<ButtonRow style={{ marginTop: "30px"}}>
				<Button to={`/report/${company}`}><h4>Create a new message</h4></Button>
				</ButtonRow>
				<h2 style={{ marginTop: "80px"}}>Absolutelly private and anonymous service.</h2>	
				<h4 style={{ marginTop: "30px"}}>Whistleblow service is completelly anonymous and no IP address, ID or email data is stored when a message is reported. All messages are handeled with confidence and security.</h4>			

				<p style={{ marginTop: "30px"}}>Whistleblow is an EU compliant service that matches requirements set by European Union for organisations with 50 employees or more. The Whistleblow service is not meant to use only by company employees but is accessible for all stakeholders that are engaged with our organisation.</p>			
				<h3 style={{ marginTop: "80px"}}>Have you filed a message already?</h3>	
				<h4 style={{ marginTop: "30px"}}>Pleace follow the progress of your message by clicking "Follow my message". You will be asked to provide message ID and password that was generated when your message was sent. </h4>			
				<ButtonRow style={{ marginTop: "40px"}}>
					<Button to="/report" ><h4>Follow my message</h4></Button>
				</ButtonRow>

			</Container>
		</Suspense>

	);
}

export default Company;
