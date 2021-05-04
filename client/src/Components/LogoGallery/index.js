import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import axios from 'axios';

const LogoGallery = () => {
	const [ organisations, setOrganisations ] = useState();

	const Wrapper = styled.div `
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 300px;
		flex-direction: row;
		height: 50px;
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
		GetOrganisations()
		return () => {
			
		}
	}, [])

    return(
			<Wrapper>
				{
					organisations ?
					organisations.map((item, i) => {
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