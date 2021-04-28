import React, { useContext }from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { AppContext } from '../../context/Context';
import {
	Link
} from 'react-router-dom';


const Button = ({ onClick, children, className, style, to}) => {
	const { orgColor } = useContext(AppContext)
	const StyledButton = styled.button`
	max-width: 200px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 45px;
	padding-right: 20px;
	padding-left: 20px;
	border-radius: 4px;
	background-color: ${orgColor}
	@media ${device.laptop} {
		
		}

`;

const Content = styled.div`
	max-width: 200px;
	color: white;

	

	@media ${device.laptop} {
		
		}

`;


    return(
		<Link to={to}>
			<StyledButton className={className} onClick={onClick} style={style}>
				<Content>
					{children}
				</Content>
        </StyledButton>
		</Link>

    );
};


export default Button;