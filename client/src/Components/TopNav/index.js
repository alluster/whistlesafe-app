import React, { useContext, Suspense, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../device';

import { Link, useParams } from "react-router-dom";
import { AppContext } from '../../context/Context';
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from '../Spinner';
import Container from '../Container';
import Button from '../Button';


const ColorBar = React.lazy(() => import('../ColorBar'));

const TopNav = () => {
	let { company } = useParams();
	const { GetOrg, orgColor, logoUrl } = useContext(AppContext);
console.log(company)
	const Nav = styled.div`
		background-color: #ffffff;
	`;


	const Wrapper = styled(Container)`
		display: flex;
		flex-direction: row;
		top: 0px;
		height: 100px;
			@media ${device.laptop} {
			}
			
	`;

	const NavItem = styled.div`
		height: 100%;
		display: flex;
		padding-left: 20px;
		padding-right: 20px;
		justify-content: center;
		flex-direction: column;
		:hover {
			background-color: ${props => props.theme.colors.background};
			cursor: pointer;
		}

	`
	const Navigation = styled.div`
		display: flex;
		justify-content: flex-end;
		flex-direction: row;
		flex: 1;
	`;

	const Logo = styled.div`
		align-self: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100px;
	`
	const LogoImage = styled.img`
		max-height: 50px;
		@media ${device.mobileL} {
			max-height: 30px;
		}

	`


	useEffect(() => {
		return () => {
		}
	}, [])

	return (
		<Suspense fallback={<Spinner />}>
			<ColorBar orgColor={orgColor} />
			<Nav>
				<Wrapper>
					{/* <Link to={LinkHome}> */}
						<Logo>
							<LogoImage src={logoUrl} alt="logo" />
						</Logo>
					{/* </Link> */}
		
					<Navigation>
					

						<NavItem>
							<h5>Language</h5>
						</NavItem>
						<NavItem>
						<a href="https://whistlesafe.herokuapp.com" >
								<h5>Login</h5>
							</a>					
					
						</NavItem>
	
			

					</Navigation>


				</Wrapper>
			</Nav>
			
		</Suspense>
	);
};

export default TopNav;