import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Social = () => {
	const Wrapper = styled.div `
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		flex-direction: row;
		height: 50px;
			@media ${device.laptop} {
				width: 100%;
			}
			
	`;

	const SocialIcon = styled(FontAwesomeIcon)`
		margin-bottom: 20px;
		margin-top: 20px;
		font-size: 40px;
		padding: 30px;
	`;

	const SocialLink = styled.a `
		color: ${props => props.theme.colors.primary};
	`;



    return(
			<Wrapper>
				<SocialLink href="https://www.facebook.com/suppilog/"><SocialIcon icon={faFacebook}/></SocialLink>
				<SocialLink href="https://twitter.com/suppilog"><SocialIcon icon={faTwitter}/></SocialLink>
				<SocialLink href="https://www.linkedin.com/company/suppilo"><SocialIcon icon={faLinkedin}/></SocialLink>

			</Wrapper>

    );
};

export default Social;