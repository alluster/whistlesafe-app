import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';
import { device } from '../../device';
import ClipLoader from "react-spinners/ClipLoader";
import Overlay from '../Overlay';
import { AppContext } from '../../context/Context';

const HeroStyled = styled.div`
	min-height: 300px;
	height: 50vh;
	z-index: -1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	@media ${device.mobileM} {
		min-height: 70vh;
		text-align: center;
    }

`;



const TextContainer = styled.div`
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
	z-index: 9999;
	display: flex;
	flex-direction: column;
	@media ${device.laptop} {
		padding-top: 40px;
		max-width: 900px;
		text-align: center;


	}	
	`;


const Title = styled.h1`
	letter-spacing: -.5px;
	font-size: 55px !important;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h1}
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
				<TextContainer>
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
				</TextContainer>
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