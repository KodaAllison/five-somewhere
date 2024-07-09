import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from "moment-timezone";

const FivePMPlaces = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCitiesAtFivePM = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cities');
        const currentFivePMCities = response.data.filter((city) => {
          const currentTime = moment.tz(city.timezone);
          return currentTime.hour() === 17;
        });
        setCities(currentFivePMCities);
      } catch (error) {
        console.error("Error fetching cities data", error);
      }
    };

    fetchCitiesAtFivePM();
  }, []);

  return (
    <div>
      {cities.map((cityData, index) => (
        <div key={`city-${index}`} className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="city-title collapse-title text-xl font-medium">
            {cityData.city}
          </div>
          <div className="city-content collapse-content">
            <p><strong>Country:</strong> {cityData.country}</p>
            <p><strong>Population:</strong> {cityData.population}</p>
            <p><strong>Currency:</strong> {cityData.currency}</p>
            <p><strong>Language:</strong> {cityData.language}</p>
            <p><strong>Favorite Beer:</strong> {cityData.favoriteBeer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FivePMPlaces;
