import React from 'react';

export default function NotFound() {
	return (
		<div className="container">
			<h className="display-4">
				{' '}<span className="text-danger">404</span> Page Not Found
			</h>

			<p className="lead text-info">Sorry, that page does not exist.</p>
		</div>
	);
}
