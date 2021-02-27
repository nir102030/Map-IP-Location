import { useState, useEffect } from 'react';

const useLocation = () => {
	const [location, setLocation] = useState('');
	const [error, setError] = useState('');

	const getLocation = async () => {
		try {
			const response = await fetch(
				'https://api.ipdata.co?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e'
			);
			const result = await response.json();
			console.log(result);
			setLocation({
				city: result.city,
				country: result.country_name,
				latitude: result.latitude,
				longitude: result.longitude,
			});
		} catch {
			setError('Sorry, the location was not found!');
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return [location, error];
};

export default useLocation;
