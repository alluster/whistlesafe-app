import React, { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import GlobalStyle from './globalStyle';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import Spinner from './Components/Spinner';
import Footer from './Components/Footer';

import Provider from './context/Provider';
// Views
const Report = React.lazy(() => import('./Views/Report'));
const Company = React.lazy(() => import('./Views/Company'));
const Home = React.lazy(() => import('./Views/Home'));




const App = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<ThemeProvider theme={theme}>
				<Provider>
					<Router>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/:company" component={Company} />
							<Route path="/report/:company" component={Report} />
							<Route exact path="/followreport/:company" render={() => (window.location = "https://dashboard.whistlesafe.eu/followreport")} />

						</Switch>	
						<Footer />

					</Router>
					<GlobalStyle />
				</Provider>
			</ThemeProvider>
		</Suspense>
	);
}

export default App;
