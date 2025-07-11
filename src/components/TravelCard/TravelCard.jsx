import './Trip.css'

function TravelCard({image, title,description}){
    return(
     <>
     <div className="tripcard">
         <img src={image} alt="Trip 1" className="tripimg" />
         
         <div className="tripinfo">
           <h4 className="info-title">{title}</h4>
           <p>
            {description}
           </p>
         </div>
       </div>
     
     </>
    );
}

export default TravelCard;