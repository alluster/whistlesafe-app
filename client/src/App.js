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
import Provider from './context/Provider';
// Views
const Report = React.lazy(() => import('./Views/Report'));
const Home = React.lazy(() => import('./Views/Home'));
const TopNav = React.lazy(() => import('./Components/TopNav'));



const App = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<ThemeProvider theme={theme}>
				<Provider>
					<Router>

						<TopNav/>

						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/report" component={Report} />
						</Switch>	
					</Router>
					<GlobalStyle />
				</Provider>
			</ThemeProvider>
		</Suspense>
	);
}

export default App;
