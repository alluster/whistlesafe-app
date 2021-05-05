import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';
import { device } from '../../device';
import ClipLoader from "react-spinners/ClipLoader";


const HeroStyled = styled.div`
	min-height: 300px;
	height: 50vh;
	
	z-index: -1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	@media ${device.mobileM} {
		min-height: 70vh;
    }

`;






const Title = styled.h1`
	letter-spacing: -.5px;
	font-size:  ${props => props.theme.fontSize.h1}
	text-align: center;
    @media ${device.laptop} {
		line-height: 60px;
		hyphens: auto;


	}	
`;

const Ingress = styled.p`
	font-size: 22px;
	letter-spacing: 0.6px;
	margin-top: 25px;
	margin-bottom: 30px;
	text-align: center;

    @media ${device.laptop} {
        font-size: 18px;
		margin-top: 10px;


     }
`;




const HeroHome = ({ title, ingress, image, children }) => {


	return (
		<HeroStyled style={{
			backgroundImage: `url(${image})`,
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			backgroundPosition: "bottom"
		}}>
			<Container>
					<Title>
						{title ?
							title
							:
							<div
								style={{
									textAlign: "center",
									width: "100%"
								}}>

								<ClipLoader color="ffffff" />
							</div>

						}

					</Title>

					<Ingress>
						{ingress}
					</Ingress>
					{children}
			</Container>




		</HeroStyled>


	);
};

HeroHome.propTypes = {
	title: PropTypes.string,
	ingress: PropTypes.string,
	image: PropTypes.string,
	children: PropTypes.any

};

export default HeroHome;