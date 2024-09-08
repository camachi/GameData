import { useFetch } from './useFetch.js'
export function GameCard ({data})
{   
    //cambio de color metacritic
    const getColor = (score) => {
      if(score >=80)
      {
        return `rgb(151, 250, 2)`
      }
    else if (score >= 75) {
      
      return `greenyellow`;

    } else if (score >= 50) {
      
      return `yellow`;
    } else {

      return `red`;
    }
    
  };

  const getMetacritic = (metacritic) => {
    if(metacritic == null)
    {
      return "NA";
    }
    else{
      return metacritic;
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
            {getMetacritic(data.metacritic)}
            </h2>
        </div>
    </div>

    <div className="masinfo-box">
        <button className='explore-but'>More info</button>

    </div>
</div>
    )
}