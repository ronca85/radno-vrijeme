import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar"
import Dashboard from './components/dashboard/Dashboard';
import DucanDetalji from './components/ducani/DucanDetalji';
import PrijaviSe from './components/auth/PrijaviSe';
import RegistrirajSe from './components/auth/RegistrirajSe';
import UnesiDucan from './components/ducani/UnesiDucan';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/project/:id" component={DucanDetalji} />
					<Route path="/prijava" component={PrijaviSe} />
					<Route path="/registracija" component={RegistrirajSe} />
					<Route path="/unesi" component={UnesiDucan} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
