import React, {useEffect} from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function CardBurger() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(".cardBurger", {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            stagger: .7,
            y: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: ".cardBurger",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
        });
    }, []);
  return (
    <>
      <div className="cardBurger">
        <img src="./asset/burger.avif" alt="" />
        <div className="cardBurger__text">
          <h3>Le big mac</h3>
          <p>listes des ingrédiants</p>
          <p>prix : 10€</p>
        </div>
        
        
      </div>
      <div className="cardBurger">
        <img src="./asset/burger.avif" alt="" />
        <div className="cardBurger__text">
          <h3>Le big mac</h3>
          <p>listes des ingrédiants</p>
          <p>prix : 10€</p>
        </div>
      </div>
      <div className="cardBurger">
        <img src="./asset/burger.avif" alt="" />
        <div className="cardBurger__text">
          <h3>Le big mac</h3>
          <p>listes des ingrédiants</p>
          <p>prix : 10€</p>
        </div>
      </div>
      
    </>
  );
}
