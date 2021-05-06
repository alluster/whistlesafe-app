import React, { useContext, Suspense } from 'react';
import styled from 'styled-components';
import { device } from '../../device';

import { AppContext } from '../../context/Context';
import Spinner from '../Spinner';
import Container from '../Container';


const ColorBar = React.lazy(() => import('../ColorBar'));

const TopNavReport = () => {
	const { GetOrg, orgColor, logoUrl } = useContext(AppContext);
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

	`;




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


						{/* <NavItem>
							<h5>Language</h5>
						</NavItem> */}
					



					</Navigation>


				</Wrapper>
			</Nav>

		</Suspense>
	);
};

export default TopNavReport;