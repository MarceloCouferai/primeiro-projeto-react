import React from "react";
import './styles/App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import designDashboard from "../src/assets/images/designing dashboard.png"
import virbrantColor from "../src/assets/images/vibrant color.png"
import daysImage from "../src/assets/images/36 days.png"


class App extends React.Component {
  render(){
    return (
      <>
      <Navbar />
      
      <section id="articles">
        <Article 
          tittle="Designing Dashboards" 
          local="NASA" 
          conteudo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          image={designDashboard}/>

        <Article 
          tittle="Vibrant Portraits of 2020" 
          local="SpaceNews" 
          conteudo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dolore magni a adipisci odit temporibus nisi, quos minima dignissimos nihil provident sed? Deserunt dolore excepturi autem aliquid necessitatibus nesciunt reprehenderit."
          image={virbrantColor}/>
          

        <Article 
          tittle="36 Days of Malayalam type" 
          local="Spaceflight Now" 
          conteudo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores pariatur dolorum velit! Distinctio cumque consequatur quis voluptatem nulla ab dolores eius? Aspernatur ad, totam repellat minus voluptatibus impedit consectetur!"
          image={daysImage}/>
          

        <Article 
          tittle="Designing Dashboards" 
          local="NASA" 
          conteudo="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum beatae accusamus aliquid quidem quisquam doloribus iure laborum molestiae in, perferendis quo facilis? Ullam cum quidem, atque nostrum magni totam maxime?"
          image={designDashboard}/>
      </section>
      </>
    );
  }
}

export default App;
