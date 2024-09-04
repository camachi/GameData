export function GameCard ({name})
{
    return(
        <div className="game-box">
    <div className="image-container">
        <img alt="game" className="game-image" src="https://image.api.playstation.com/vulcan/ap/rnd/202402/2214/fe6de6126062e4d38dd6c4cef9ba1966ee2440a43429dc98.jpg"/>
    </div>
    <div className="game-info">
        <div className="name-box">
        <h2 className="titulo-game">{name}</h2>
        </div>
        <div className="rating-box">
            
        </div>
    </div>

    <div className="genero-box">

    </div>
</div>
    )
}