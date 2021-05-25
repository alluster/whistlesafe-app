import React from 'react';
import styled from 'styled-components';

interface Props {
	orgColor: string
}
const ColorBar = ({orgColor}: Props) => {
	const Bar = styled.div`
		height: 6px; 
		position: absolute; 
		z-index: 1000;
		top: 0px;
		width: 100%;

	`

	return (
		<Bar style={{ backgroundColor: orgColor }} />

	);
};

export default ColorBar;