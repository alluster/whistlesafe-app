import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {
	BrowserRouter as Router,
	useParams
  } from "react-router-dom";
import Container from '../Components/Container';
import generator from 'generate-password';
import Button from '../Components/Button';
import Hero from '../Components/Hero';
import { AppContext } from '../context/Context';


const Input = styled.input`
	height: 40px;
	border: gray solid 1px;
	padding-left: 20px;
	line-height: 40px;

`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

`


var password = generator.generate({
	length: 10,
	numbers: true
});

const Report = () => {
	const { orgId } = useContext(AppContext);
	let history = useHistory();


	const [loading, setLoading] = useState(false);
	const [report, setReport] = useState("")
	const [time, setTime] = useState("")
	const [details, setDetails] = useState("")
	const [reportId, setReportId] = useState(password)
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			return await axios.get('/api/createreport',  {
				params: {
					reportId: reportId,
					report: report,
					time: time,
					details: details,
					orgId: orgId	
				}	
			})
		
			.then(alert("Report saved"), history.push('/'))
		} 
		catch (error) {
			console.error(error.message)
		}
	}


	useEffect(() => {
	}, [])


    return(
		<div>

			<Hero ingress={`Your uniq report ID: ${reportId}`} title="Report"/>
		<Container>
				<h1 style={{marginBottom: "30px" }}></h1> 
				<form>
					<InputGroup>
						<label>Please describe your concern</label>
						<Input type="text" placeholder="Description" value={report} onChange={(e) => setReport(e.target.value)} />
					</InputGroup>
					<InputGroup>
						<label>When did this happen?</label>
						<Input type="text" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
					</InputGroup>
					<InputGroup>
						<label>Please provide any important details</label>
						<Input type="text" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} />
					</InputGroup>
			
					

					<Button to="/" variant="primary" type="submit" onClick={e => handleSubmit(e)}>
					Save report
				</Button>
				</form>
					

				

			
			
		</Container>
		</div>

    );
};

 Report.propTypes = {
    props: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
 }

export default Report;