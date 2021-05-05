import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import axios from 'axios';

const Provider = ({ children }) => {
	const [orgColor, setOrgColor] = useState("#000")
	const [logoUrl, setLogoUrl] = useState("./logo-dark.svg")
	const [orgId, setOrgId] = useState("")

	const GetOrg = async (company) => {
		await axios.get('/api/organisation', {
			params: {
				orgName: company
			}
		})
			.then(function (response) {
				let data = response.data[0]
				try { setOrgColor(data.org_color)} 
					catch (error) {
						setOrgColor("#000")
					}
				try { setLogoUrl(data.logo_url)} 
					catch (error) {
						setLogoUrl("./logo-dark.svg")
					}
				try { setOrgId(data.org_id)} 
					catch (error) {
						setOrgId("")
					}
				
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
			});

	}
	useEffect(() => {
		GetOrg()
		return () => {
		}
	}, [])
	return (
		<AppContext.Provider
			value={{
				orgColor,
				logoUrl,
				orgId,
				GetOrg,

			}}
		>
			{children}
		</AppContext.Provider>
	);
}
Provider.propTypes = {
	children: PropTypes.any
};

export default Provider;