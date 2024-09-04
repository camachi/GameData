export function Genres({children})
{   
    return(
        <div className="genres-container">
            <div className="category-container">
                <div className="category-box">
                    <h3>Action</h3>
                </div>
                <div className="category-box">
                    <h3>RPG</h3>
                </div>
                <div className="category-box">
                    <h3>Online</h3>
                </div>
                <div className="category-box">
                    <h3>Online</h3>
                </div>
                <div className="category-box">
                    <h3>Online</h3>
                </div>
                <div className="category-box">
                    <h3>Online</h3>
                </div>
                <div className="category-box">
                    <h3>Online</h3>
                </div>
            </div>
            <div className="gamecards-container-genres">
            <div className="card-divider">
                {children[0]}
                {children[1]}
            </div>
            <div className="card-divider">
                {children[2]}
                {children[3]}
            </div>

            </div>
            
        </div>
    )
}