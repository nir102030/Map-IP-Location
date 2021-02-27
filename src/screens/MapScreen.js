import React from 'react';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/styles.css';

const MapScreen = () => {
	const [location, error] = useLocation();

	return (
		<div className="mapScreen">
			{error ? <ErrorMessage error={error} /> : location ? <Map location={location} /> : <Loader />}
		</div>
	);
};

export default MapScreen;
