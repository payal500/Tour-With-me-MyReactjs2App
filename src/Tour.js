import Card from "./Card";
import './index.css';
function Tour({tours,removetour}){
    return(
        <div className="cointainer">
            <div >
                <h2 className="title">Tour with Me</h2>
            </div>
            <div className="cards">
               { tours.map( (tour) => {
                    return <Card key={tour.id} {...tour} removetour={removetour}></Card>;
                })}
            </div>
        </div>
    );
}
export default Tour;