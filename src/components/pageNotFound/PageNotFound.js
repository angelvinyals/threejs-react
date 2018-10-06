import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundImage from '../../assets/images/PageNotFound.png';

const PageNotFound = () => (
	<div>
		<img src={PageNotFoundImage} style={{width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} alt={"page not found"} />
		<center><Link to="/">Return to Home Page</Link></center>
	</div>
);

export default PageNotFound;