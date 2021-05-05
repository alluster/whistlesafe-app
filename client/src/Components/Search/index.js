import styled from 'styled-components';
import React, { useState } from 'react';
import Button from '../Button';
import ClipLoader from "react-spinners/ClipLoader";
import { device } from '../../device';


const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;
	@media ${device.mobileL} {
		flex-direction: column;

	}

`;


const Select = styled.select`
	height 50px;
	width: 100%;
	line-height: 50px;
	padding-left: 20px;
	border: #DADADA solid 1px;
	border-radius: 2px;
	background-color: #ffffff;
	font-size: 20px;
	padding-right: 20px;
	@media ${device.mobileL} {
		width: 100%;

	}
	
`;
const Loader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	flex-direction: column;
	height: 100%;
		@media ${device.laptop} {
			width: 100%;
		}
		
`;

const SearchButton = styled(Button) `
	@media ${device.mobileL} {
		width: calc(100% - 40px)!important;
		

	}
`;



const Search = (props) => {
	const [select, setSelect] = useState("")
	const handleChange = (e) => {
		setSelect({ value: e.target.value });
	}
	return (
		<div>
			{
				props.organisations ?
					<SearchContainer>

						<Select value={select} onChange={handleChange} >
							<option value="0">Select your organisation</option>

							{

								props.organisations.map((item, i) => {
									return (
										<option key={i} value={item.org_name} >
											{item.org_name}
										</option>

									)
								}
								)
							}

						</Select>
						{
							select.value ?
								<SearchButton style={{ flex: 1 }} to={`/${select.value}`}>
									Go to {select.value} reporting
								</SearchButton>
								:
								<SearchButton disabled={true} style={{ flex: 1 }} to="">
									Select your organisation
								</SearchButton>
						}



					</SearchContainer>

					:
					<Loader>
						<h5>Setting up organisations</h5>
						<div style={{ marginTop: "20px" }}>
							<ClipLoader />

						</div>
					</Loader>
			}
		</div>
	)
}

export default Search;