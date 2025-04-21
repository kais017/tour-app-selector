import React, {useEffect, useState} from 'react';
import TourCard from './TourCard'; // import TourCard component

//TourCard fetches tours and renders list

const Gallery = ({tours, setTours, onRemove}) => {
    //local state to hold tours data
    const [loading, setLoading] = useState(true); 
    // loading state
    const [error, setError] = useState(false); 
    // error state

    // create function to fetch tours data
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

    // render loading state

    if (loading) {
        return (
            <div className="loading"> 
                <h2>Loading...</h2> {/* displays loading message */}
            </div>
        );
    }

    //render error state
    if (error) {
        return (
            <div className="error">
                <h2>Something went wrong...</h2> {/* displays error message */}
            </div>
        );
    }

    // render if no tours
    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No tours available</h2> {/* no tours message */}
                <button className="btn" onClick={fetchTours}>Refresh</button> {/* refresh button */}
            </div>
        );
    }

    // render tours list
    return (
        <section className="tours">
            <h2>Our Tours</h2> {/* tours heading */}
            <div className="tours-list">
                {tours.map((tour) => (
                    <TourCard key={tour.id} {...tour} onRemove={onRemove} /> // render TourCard for each tour
                ))}
            </div>
        </section>
    );
}

    export default Gallery; // export the Gallery component for use in other files

