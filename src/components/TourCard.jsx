import React, {useState} from 'react';

//TourCard renders individual tour details
const TourCard = ({id, name, info, price, image, onRemove}) => { 
const [readMore, setReadMore] = useState(false); // toggle read more/less

   return (
    <article className='tour-card'>
        <img src={image} alt={name} /> {/* tour picture */}
        <div className="card-info">
        <h3>{name}</h3> {/* tour name */}
        <h5>${price}</h5> {/* tour price */}
        <p>
            {/* If readMore is true, show full info, else show less */}
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
                {readMore ? 'Show Less' : 'Read More'}
                </button>
        </p>

        <button className ="btn-remove" onClick={() => onRemove(id)}> 
 Not Interested  {/* Remove the tour from the list */}
        </button>  
        </div>
    </article> 

   );

}

export default TourCard; 
// export the TourCard component for use in other files