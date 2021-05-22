import React, { Suspense, useContext, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams

} from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../device';

import Hero from '../Components/Hero';
import Button from '../Components/Button';
import { AppContext } from '../context/Context';
import TopNavReport from '../Components/TopNavReport';
import Banner from '../Components/Banner';
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
	const { GetOrg, i18n, lang, t  } = useContext(AppContext);
	useEffect(() => {
		GetOrg(company);
		i18n.changeLanguage(lang);
		return () => {
		}
	}, [])
	return (
		<Suspense fallback={<Spinner />}>
			<TopNavReport />
			<Hero 
				image="https://images.unsplash.com/photo-1552083974-186346191183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
				title={t('page.company.hero.title')}
				ingress={t('page.company.hero.ingress')}
			>
				<ButtonRow>
					<Button to={`/report/${company}`}><h4>{t('button.create-report')}</h4></Button>
				</ButtonRow>
				
			</Hero>
				<Banner
					title={t('banner.intro.title')}
					ingress={t('banner.intro.ingress')}
					body={t('banner.intro.body')}
				>
					
				</Banner>
				<Banner
					dark
					title={t('banner.private.title')}
					ingress={t('banner.private.ingress')}
					body={t('banner.private.body')}
				>
				
				</Banner>
				<Banner
					title={t('banner.follow-up.title')}
					ingress={t('banner.follow-up.ingress')}
					body={t('banner.follow-up.body')}
				>
					<ButtonRow style={{ marginTop: "30px"}}>
						<Button to={`/followreport/${company}`}><h4>{t('button.follow-report')}</h4></Button>
					</ButtonRow>
				</Banner>
				
		</Suspense>

	);
}

export default Company;
