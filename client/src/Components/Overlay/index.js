import styled, { css } from 'styled-components';
import React from 'react';

const Bg = styled.div`
    ${props => {
        if (!props.themeColor.length > 0) return css`
            background-color: #000;
        `;
        
        return css`
		background-color: ${props => props.themeColor};
        `;
    }}
    opacity: 0.8;
	height: inherit;
    width: 100%;
    z-index: 1;
    position: absolute;
	top: 100px;
	min-height: inherit;

`;

const Overlay = (props) =>
    <Bg themeColor={props.themeColor} />;

export default Overlay;