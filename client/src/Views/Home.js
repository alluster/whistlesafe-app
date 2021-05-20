import React, { Suspense, useState, useEffect, useContext } from 'react';
import Container from '../Components/Container';
import axios from 'axios';
import { AppContext } from '../context/Context';
import TopNav from '../Components/TopNav';

const Spinner = React.lazy(() => import('../Components/Spinner'));
const LogoGallery = React.lazy(() => import('../Components/LogoGallery'));
const HeroHome = React.lazy(() => import('../Components/HeroHome'));
const Search = React.lazy(() => import('../Components/Search'));



const Home = () => {
	const { GetOrg, i18n, lang, t } = useContext(AppContext);
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
		i18n.changeLanguage(lang);
		GetOrganisations();
		GetOrg("");
		return () => {
			
		}
	}, [])
	return (
		<Suspense fallback={<Spinner />}>
			<TopNav />
			<HeroHome
				image="/hero-bg.svg"
				title={t('page.home.hero.title')}
				ingress={t('page.home.hero.ingress')}
			>
				
				<Search 
					organisations={organisations}
					placeholder={t('page.home.search.placeholder')}
					buttonText={t('page.home.search.button')}

				/>

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
