import react from 'react'

export default function Target(props){
    console.log(props.title)
    return(    
        <div className="targetContainer">
            <img src={props.imageUrl}/>
            <div className="Location">
                <img src="#" alt="location-icon"/> 
                <p>{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <p>{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
        </div>
    );
}