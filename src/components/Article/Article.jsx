import React from "react";
import "./Article.css"

export class Article extends React.Component {
    render(){
        return(
            <article id="article">
                <img src={this.props.image} alt="" />
                <div className="article-infos">
                    <h2 className="tittle">{this.props.tittle}</h2>
                    <h3 className="subtittle">{this.props.local}</h3>
                    <p>{this.props.conteudo}</p>
                </div>
            </article>
        )
    }
}
