import './GifsCard.scss'
const GifsCard = ({id, title, url}) => {
    return (
        <div className="card animate__fadeIn">
           {/* <h2>{id}</h2> */}
           <img src={url} alt="gifs"/>
           <h2>{title}</h2>
        </div>
    )
}

export default GifsCard
