import React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';

import 'bootstrap/dist/css/bootstrap.min.css';

import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import { Provider } from './context';

import Header from './components/layout/Header';
import About from './components/pages/About';
import './App.css';
import NotFound from './components/pages/NotFound';

function App() {
	return (
		<Provider>
			<Router>
				<div className="App">
					<Header branding="Contact Manger" />
					<div className="container" />
					<Switch>
						<Route exact path="/" component={Contacts} />
						<Route exact path="/contact/add" component={AddContact} />
						<Route exact path="/contact/edit/:id" component={EditContact} />
						<Route exact path="/about" component={About} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
