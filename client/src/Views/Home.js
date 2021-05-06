import React, { Suspense, useState, useEffect, useContext } from 'react';
import Container from '../Components/Container';
import axios from 'axios';
import { AppContext } from '../context/Context';

const Spinner = React.lazy(() => import('../Components/Spinner'));
const LogoGallery = React.lazy(() => import('../Components/LogoGallery'));
const HeroHome = React.lazy(() => import('../Components/HeroHome'));
const Search = React.lazy(() => import('../Components/Search'));
import TopNav from '../Components/TopNav';



const Home = () => {
	const { GetOrg } = useContext(AppContext);
	const [ organisations, setOrganisations ] = useState();

	const GetOrganisations = async () => {
		await axios.get('/api/organisations')
			.then(function (response) {
				let data = response.data
				setOrganisations(data)
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
			});

	};
	useEffect(() => {
		GetOrganisations()
		GetOrg("")
		return () => {
			
		}
	}, [])
	return (
		<Suspense fallback={<Spinner />}>
			<TopNav />
			<HeroHome
				image="/hero-bg.svg"
				title="Something on your mind?"
				ingress="Whistlesafe is an EU whistleblow directive applicable reporting service."
			>
				<Search organisations={organisations}/>

			</HeroHome>
			
			<Container >

				<h1 style={{ textAlign: "center", paddingTop: "50px" }} >Easy to report violations trough Whistlesafe reporting tool</h1>
				<h4 style={{ textAlign: "center", paddingTop: "50px" }}>As you submit a violation report on Whistlesafe, we notify the organisation of your selection. A report is sent for them to take action and to inform you about progress of your reporting.  </h4>
				<LogoGallery organisations={organisations} style={{ marginTop: "50px" }} />

			</Container>
		</Suspense>

	);
}

export default Home;
