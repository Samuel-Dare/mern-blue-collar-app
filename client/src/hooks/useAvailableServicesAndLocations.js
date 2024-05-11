import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { BASE_URL } from '../config/config';

const useAvailableServicesAndLocation = () => {
  const [availableServices, setAvailableServices] = useState([]);
  const [availableLocations, setAvailableLocations] = useState([]);

  const fetchAvailableData = async () => {
    try {
      const servicesResponse = await fetch(
        `${BASE_URL}/config/availableServices.json`,
      );
      if (!servicesResponse.ok) {
        throw new Error('Failed to fetch available services');
      }
      const servicesData = await servicesResponse.json(); // Convert to JSON
      setAvailableServices(servicesData);

      const locationsResponse = await fetch(
        `${BASE_URL}/config/availableLocations.json`,
      );
      if (!locationsResponse.ok) {
        throw new Error('Failed to fetch available locations');
      }
      const locationsData = await locationsResponse.json(); // Convert to JSON
      setAvailableLocations(locationsData);
    } catch (error) {
      console.error('Error fetching available data:', error);
      toast.error('Failed to fetch available services and locations');
    }
  };

  useEffect(() => {
    // Fetch available services and locations from backend
    fetchAvailableData();
  }, []);

  return { availableServices, availableLocations };
};

export default useAvailableServicesAndLocation;
