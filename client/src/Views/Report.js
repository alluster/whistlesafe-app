import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {
	BrowserRouter as Router,
	useParams
} from "react-router-dom";
import { device } from '../device';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Container from '../Components/Container';
import generator from 'generate-password';
import Button from '../Components/Button';
import { AppContext } from '../context/Context';
import Spinner from '../Components/Spinner';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fi from 'date-fns/locale/fi';
registerLocale('fi', fi)

const Input = styled.textarea`
	height: 40px;
	border: #DADADA solid 1px;
	border-radius: 2px;
	padding-left: 20px;
	line-height: 40px;
	background-color: #F7F7F7; 
	margin-top: 10px;

`;
const Picker = styled(DatePicker)`
	height: 40px;
	border: #DADADA solid 1px;
	border-radius: 2px;
	padding-left: 20px;
	line-height: 40px;
	background-color: #F7F7F7; 
	margin-top: 10px;
	width: calc(100% - 20px);

`;
const Label = styled.label`
  color: #6F6F6F;
  font-size: 12px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

`;

const Card = styled.div`
	min-height: 100%;
	background-color: white;
	margin-right: auto;
	margin-left: auto;
	margin-top: 40px
	width: 100%;
	border-radius: 16px;
	padding: 20px;
	border: 1px solid #F4F4F4;
	-webkit-box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26); 
	box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26);
	@media ${device.laptop} {
		width: 70vw;

	}
		
	`;
const CardContent = styled.div`
	max-width: 400px;
	margin-right: auto;
	margin-left: auto;
	@media ${device.laptop} {
		width: 70vw;

	}
		
	`;
var password = generator.generate({
	length: 10,
	numbers: true
});

const Report = () => {
	const [startDate, setStartDate] = useState(new Date());
	const { orgId, GetOrg } = useContext(AppContext);
	let history = useHistory();
	let { company } = useParams();


	const [loading, setLoading] = useState(false);
	const [report, setReport] = useState("");
	const [occurTime, setOccurTime] = useState("");
	const [details, setDetails] = useState("");
	const [reportId, setReportId] = useState(password);
	const [reportPassword, setReportPassword] = useState(password);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

	
		try {
			return await axios.get('/api/createreport', {
				params: {
					reportId: reportId,
					reportPassword, reportPassword,
					report: report,
					occurTime: startDate,
					dateAdded: new Date().toUTCString(),
					reportDetails: details,
					orgId: orgId
				}
			})

				.then(
				
						setLoading(false),
						alert("Thank you! Your message has been successfully sent"),
						history.push(`/${company}`)
					)

		}
		catch (error) {
			setLoading(false)
			console.error(error.message)
		}

	};


	useEffect(() => {
		GetOrg(company)
	}, []);


	return (
		<div>

			<Container>
				<Card>
					<CardContent>
						{
							!loading ?



								<div>
									<h4 >Your uniq report ID: {reportId}</h4>
									<h4 style={{ marginBottom: "30px" }}>Password: {reportId}</h4>

									<form>
										<InputGroup>
											<Label>Date of report</Label>
											<Input type="text" rows="1" placeholder="Date of report" value={new Date().toUTCString()} disabled />
										</InputGroup>
										<InputGroup>
											<Label>Please describe your concern</Label>
											<Input type="text" rows="10" placeholder="Description" value={report} onChange={(e) => setReport(e.target.value)} />
										</InputGroup>
										<InputGroup>
											<Label>When did this happen?</Label>
											<Picker        
												showTimeSelect dateFormat="Pp" 
												locale="fi" selected={startDate} 
												onChange={date => setStartDate(date)} 
											/>			
										</InputGroup>
																		
										
										<InputGroup>
											<Label>Please provide any important details</Label>
											<Input type="text" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} />
										</InputGroup>



										<Button to="/" variant="primary" type="submit" onClick={e => handleSubmit(e)}>
											Send private message
								</Button>
									</form>
								</div>
								:
								<Spinner />
						}





					</CardContent>

				</Card>

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