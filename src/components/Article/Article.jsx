import React from "react";
import articleImg from '../../assets/images/designing dashboard.png'
export class Article extends React.Component {
    render(){
        return(
            <article id="article">
                <img src="" alt="" />
                <div className="article-infos">
                    <h2 className="tittle">Designing Dashboards</h2>
                    <h3 className="subtittle">NASA</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </article>
        )
    }
}