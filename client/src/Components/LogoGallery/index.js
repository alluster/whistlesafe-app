import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';

const LogoGallery = (props) => {

	const Wrapper = styled.div `
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 300px;
		flex-direction: row;
		margin-top: 300px;
		flex-wrap: wrap;
			@media ${device.mobileL} {

			}
			
	`;

	const ImageContainer = styled.div`
		text-align: center;
		width: 200px;
		padding: 30px;
	`;
	const Image = styled.img`
		height: 50px;


	`;


    return(

			<Wrapper>

				{
					props.organisations ?
					props.organisations.map((item, i) => {
						return(
							<ImageContainer key={i}>
								<a href={`/${item.org_name}`}>
								<Image src={item.logo_url}/>

								</a>
							</ImageContainer>

						)
					})
					
					:
					<div></div>
				}
				

			</Wrapper>

    );
};

export default LogoGallery;