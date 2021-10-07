import GifsCard from "./GifsCard";
import { useFetch } from '../hooks/useFetch';
import './GifsGrid.scss';

const GiftGrid = ({ category }) => {

   const {data:images, loading} = useFetch(category);
   
     return (
        <>
            <h3>{category}</h3>
           {loading && <p>Loading...</p>}
           <div className="container">
               {
                   images.map(img => {
                       return <GifsCard key={img.id} {...img} />
                   })
               }
           </div>
        </>
    )
}

export default GiftGrid
