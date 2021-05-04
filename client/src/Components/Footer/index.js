import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { device } from '../../device';

const Footer = () => {

const FooterContent = styled.div`
    width: 100%;
	margin-top: 100px;
	padding-top: 30px;
	padding-bottom: 50px;
	align-items: center;
	background-color: ${props => props.theme.colors.backgroundDark}
    @media ${device.laptop} {
		bottom: 0;
    }
`;


const Logo = styled.img`
    width: 150px;
    
`;

const Content = styled.div`
	margin-top: 50px;
	margin-bottom: 50px;
	text-align: center;

`;





    return(
        <FooterContent>
			<Container>
				<Content>
				<Logo src="/logo-dark.svg" alt="Logo"/>

		
				</Content>
			</Container>
        </FooterContent>
    );
};


export default Footer;