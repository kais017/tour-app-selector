import React, { useEffect, useState } from 'react';
import TourCard from './TourCard'; // import TourCard component

const Gallery = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true); // loading state
    const [error, setError] = useState(false); // error state
    const [selectedDestination, setSelectedDestination] = useState('All'); // state for selected destination

    // Fetch tours data
    const fetchTours = async () => {
        try {
            const response = await fetch('/api/react-tours-project'); // fetch data from API
            const data = await response.json();
            setTours(data); // set tours data to state
        } catch (error) {
            console.error('Error fetching tours:', error); // log error
            setError(true); // set error to true
        } finally {
            setLoading(false); // set loading to false
        }
    };

    useEffect(() => {
        fetchTours(); // call fetchTours function on component mount
    }, []); // empty dependency array to run only once

    // Get unique destinations for the dropdown
    const destinations = ['All', ...new Set(tours.map((tour) => tour.destination))];

    // Filter tours based on selected destination
    const filteredTours = selectedDestination === 'All'
        ? tours
        : tours.filter((tour) => tour.destination === selectedDestination);

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <h2>Something went wrong...</h2>
            </div>
        );
    }

    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No tours available</h2>
                <button className="btn" onClick={fetchTours}>Refresh</button>
            </div>
        );
    }

    return (
        <section className="tours">
            <h2>Our Tours</h2>
            {/* Dropdown for selecting destination */}
            <div className="filter">
                <label htmlFor="destination">Filter by Destination:</label>
                <select
                    id="destination"
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                >
                    {destinations.map((destination, index) => (
                        <option key={index} value={destination}>
                            {destination}
                        </option>
                    ))}
                </select>
            </div>
            <div className="tours-list">
                {filteredTours.map((tour) => (
                    <TourCard key={tour.id} {...tour} onRemove={onRemove} />
                ))}
            </div>
        </section>
    );
};

export default Gallery;

