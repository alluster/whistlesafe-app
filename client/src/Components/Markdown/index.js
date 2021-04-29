import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';



const Markdown = ({source}) => {
	
	
	const StyledMarkdown = styled(ReactMarkdown)`
	h1 {

        margin: 20px 0px 20px 0px;
		font-weight: 600;
		font-size: 40px;
		
    }
    h2 {

        margin: 20px 0px 20px 0px;

    }
    h3 {
  
        margin: 20px 0px 20px 0px;

    }
    h4 {
        margin: 20px 0px 20px 0px;

    }
    h5 {
      
        margin: 20px 0px 20px 0px;

    }
    h6 {
  
        margin: 20px 0px 20px 0px;

	}
	p {
		margin: 15px 0px 15px 0px;
		font-size: 20px;
		line-height: 30px !important;

	}
    img {
		width: 100%;
		margin-top: 40px;
		margin-bottom: 40px;
    }
	`

	return(
		
			<StyledMarkdown source={source} />
		
	)
}

export default Markdown;
