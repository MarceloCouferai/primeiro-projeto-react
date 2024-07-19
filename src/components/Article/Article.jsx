import React from "react";
import "./Article.css"

export function Article({tittle, local, conteudo, image}){
    return(
        <article id="article">
            <img src={image} alt="" />
            <div className="article-infos">
                <h2 className="tittle">{tittle}</h2>
                <h3 className="subtittle">{local}</h3>
                <p>{conteudo}</p>
            </div>
        </article>
    )
}

