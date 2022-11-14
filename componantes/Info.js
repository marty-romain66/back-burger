import React, { useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function Info() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(".info", {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      stagger: .7,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".info",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });
  }, []);
  return (
    <div className='info'>
      <div className='info__text'>
        <h2>Description du Resto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quidem voluptatum quos quas. Quisquam, quae. Quisquam
          </p>
          </div>


    </div>
  )
}
