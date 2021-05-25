import React, { MouseEventHandler, useContext }from 'react';
import styled, { css } from 'styled-components';
import { device } from '../../device';
import { AppContext } from '../../context/Context';
import { Link } from 'react-router-dom';

interface Props {
	onClick: MouseEventHandler,
	children: JSX.Element,
	to: string,
	disabled: boolean,
	className: string,
	style: {},
	href: string
}
const Button = ({ onClick, children, className, style, to, href, disabled}: Props) => {
	const { orgColor } = useContext(AppContext)
	const StyledButton = styled.button`
		${props => {
			if (disabled) return css`
				background-color: ${props => props.theme.colors.disabled};

			`;
			
			return css`
				background-color: ${orgColor}
			`;
		}}
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 50px;
		padding-right: 20px;
		padding-left: 20px;
		border-radius: 4px;
		white-space: nowrap;
		@media ${device.laptop} {
			
			}

	`;

	const Content = styled.div`
		color: white;
		white-space: nowrap;
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