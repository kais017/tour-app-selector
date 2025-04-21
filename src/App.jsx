import React, { useState } from "react"; // import useState from React

import Gallery from "./components/Gallery";
// import Gallery component to show tours

import './styles/styles.css'; // import styles

function App() {
  const [tours, setTours] = useState([]); // local state to hold tours data

  const removeTour = (id) => {

    setTours((tours) => tours.filter((tour) => tour.id !== id)); 
    // remove tour from list
  };

  return (
    <main>
      <h1>Tour Explorer</h1> {/* main title */}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} /> {/* render Gallery component */}
    </main>
    );
  }

export default App;
// export the App

