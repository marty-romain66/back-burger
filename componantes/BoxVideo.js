import React, { useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import axios from 'axios';
export default function BoxVideo() {
  // const [getData, setData] = React.useState(data);
  // console.log(data);
  // useEffect(() => { 
  //   setData(data);
  //   console.log(data);

  // }, [data]);
  gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  const tl = gsap.timeline()
  tl.fromTo(".boxVideo h1", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1.5,
  });
  tl.fromTo(".boxVideo h2", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1.5,
  });

  
}, []);
  return (
    <div className="boxVideo">
      {/* <h1>{getData.config}</h1> 
      <h2>{getData.textDR}</h2> */}
      <h1>Nom du Resto</h1>
      <h2>Texte de description</h2>
      {/* <h1>Le titre de la video</h1>
      <h2>La description de la video</h2> */}
        <video src="https://www.umamiburgerparis.com/media/videos/intro.mp4?c=3" autoPlay muted loop></video>
    </div>
  )
}
