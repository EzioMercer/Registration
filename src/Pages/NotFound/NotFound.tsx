import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
	return (
		<>
			<h1>404 Not Found</h1>
			<Link to={`/${PROJECT_NAME}/`}>Go Home</Link>
		</>
	)
}

export default NotFound;
