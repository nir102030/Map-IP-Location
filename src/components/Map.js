import React from 'react';

const Map = ({ location }) => {
	return (
		<div className="mapView">
			<div className="mapTitle">
				{location.city}, {location.country}
			</div>
			<div className="mapContainer">
				<iframe
					title="map"
					style={{ border: 0, height: '100%', width: '100%' }}
					loading="lazy"
					allowFullScreen
					src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=${location.latitude},${location.longitude}`}
				></iframe>
			</div>
		</div>
	);
};

export default Map;
