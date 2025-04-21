import React, { useState } from "react"; // import useState from React
import Gallery from "./components/Gallery"; // import Gallery component
import DestinationSelector from "./components/DestinationSelector"; // import DestinationSelector component
import './styles/styles.css'; // import styles

function App() {
  const [tours, setTours] = useState([]); // local state to hold tours data
  const [selectedDestination, setSelectedDestination] = useState('All'); // state for selected destination

  const removeTour = (id) => {
    setTours((tours) => tours.filter((tour) => tour.id !== id)); 
    // remove tour from list
  };

  // Get unique destinations for the dropdown
  const destinations = ['All', ...new Set(tours.map((tour) => tour.name))];

  return (
    <main>
      <h1>Tour Explorer</h1> {/* main title */}
      {/* Destination Selector */}
      <DestinationSelector
        destinations={destinations}
        selectedDestination={selectedDestination}
        onDestinationChange={setSelectedDestination}
      />
      {/* Render Gallery component */}
      <Gallery
        tours={tours}
        setTours={setTours}
        onRemove={removeTour}
        selectedDestination={selectedDestination}
      />
    </main>
  );
}

export default App;

