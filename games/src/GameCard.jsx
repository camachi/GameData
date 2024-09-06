import { useFetch } from './useFetch.js'
export function GameCard ({data})
{   
    //cambio de color metacritic
    const getColor = (score) => {
    if (score >= 75) {
      // De 75 a 100: verde
      return `rgb(0, ${255 * (score / 100)}, 0)`;
    } else if (score >= 50) {
      // De 50 a 74: amarillo-verde
      return `rgb(${255 * (1 - score / 100)}, 255, 0)`;
    } else {
      // De 0 a 49: rojo-amarillo
      return `rgb(255, ${255 * (score / 50)}, 0)`;
    }
  };

    return(
        <div className="game-box">
    <div className="image-container">
        <img alt="game" className="game-image" src={data.background_image}/>
    </div>
    <div className="game-info">
        <div className="name-box">
        <h2 className="titulo-game">{data.name}</h2>
        </div>
        <div className="rating-box">
            <h2 style ={{color: getColor(data.metacritic) }}>
            {data.metacritic}
            </h2>
        </div>
    </div>

    <div className="masinfo-box">
        <button className='explore-but'>More info</button>

    </div>
</div>
    )
}