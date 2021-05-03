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
import Button from '../Components/Button';
import { AppContext } from '../context/Context';

const Spinner = React.lazy(() => import('../Components/Spinner'));
const LogoGallery = React.lazy(() => import('../Components/LogoGallery'));
const HeroHome = React.lazy(() => import('../Components/HeroHome'));



const Home = () => {
	const { GetOrg } = useContext(AppContext);
	useEffect(() => {
		return () => {
			GetOrg("")
		}
	}, [])
	return (
		<Suspense fallback={<Spinner />}>
			<HeroHome
				image="/hero-bg.svg"
				title="Something on your mind?"
				ingress="Whistlesafe is an EU whistleblow directive applicable reporting service." >
			</HeroHome>
			<Container >
			
				<h1 style={{ textAlign: "center", paddingTop: "50px" }} >Easy to report violations trough Whistlesafe reporting tool</h1>
				<h4 style={{ textAlign: "center", paddingTop: "50px" }}>As you submit a violation report on Whistlesafe, we notify the organisation of your selection. A report is sent for them to take action and to inform you about progress of your reporting.  </h4>
				<h4 style={{ textAlign: "center", paddingTop: "50px" }}>Organisations listed in the Whistlesafe network:</h4>
				<LogoGallery style={{ marginTop: "50px" }}/>

			</Container>
		</Suspense>

	);
}

export default Home;
