import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import $ from 'jquery'
import Popper from 'popper.js'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import NavContact from './components/NavContact';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Cart from './components/Cart';
import FooterPage from './components/FooterPage';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import SingleDrug from './pages/SingleDrug';
import { Drugs } from './pages/Drugs';


export default function App() {
	return (
		<>
			<NavContact /><hr style={{margin: 0}}/>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about-us" component={AboutUs} />
				<Route exact path="/contact-us" component={ContactUs} />
				<Route exact path="/team" component={Team} />
				<Route exact path="/gallery" component={Gallery} />
				<Route exact path='/drugs/:drug' component={SingleDrug} />
				<Route exact path='/drugs/' component={Drugs} />
				<Route exact path="/cart" component={Cart} />
				<Route component={Error} />
			</Switch>
			<FooterPage />
			<Footer />
			<Modal />
		</>
	);
}