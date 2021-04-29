import React, {useEffect, useContext  }from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { device } from '../../device';
import Social from '../Social'
import { AppContext } from '../../context/Context';
import Markdown from '../Markdown';

const Footer = () => {
	const context = useContext(AppContext);

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

const SocialButtons = styled.div`
	margin-top: 30px;
`;



useEffect(() => {
		// context.GetFooterContent("4g3oxVSEZ0pvZelnhxZVHL",`${context.lang}`)
		// eslint-disable-next-line
}, [])

    return(
        <FooterContent>
			<Container>
				<Content>
				<Logo src="/logo-dark.svg" alt="Logo"/>

					{/* <Markdown source={context.footerContent.body} /> */}
					{/* <SocialButtons>
						<Social />
					</SocialButtons> */}
				</Content>
			</Container>
        </FooterContent>
    );
};


export default Footer;