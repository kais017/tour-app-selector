import React from 'react';

const DestinationSelector = ({ destinations, selectedDestination, onDestinationChange }) => {
    return (
        <div className="filter">
            <label htmlFor="destination">Filter by Destination:</label>
            <select
                id="destination"
                value={selectedDestination}
                onChange={(e) => onDestinationChange(e.target.value)}
            >
                {destinations.map((destination, index) => (
                    <option key={index} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;