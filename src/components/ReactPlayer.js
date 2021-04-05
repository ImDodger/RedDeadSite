import React from "react";
import ReactPlayer from "react-player";
import "../App.css"

function PlayerApp() {
    return ( 
        <ReactPlayer 
            className="trailer"
            url = "https://www.youtube.com/watch?v=gmA6MrX81z4&ab_channel=RockstarGames"
            width='100%'
            height='700px'
        />
    )
}

export default PlayerApp