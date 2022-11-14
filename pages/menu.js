import React from "react";
import axios from "axios";

export default function menu() {
  
  return (
    <div className="pageMenu">
      <h1>Liste de nos burgers</h1>
      <div className="pageMenu__box">
        
        {/* {data.map((burger) => ( */}
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
    
        
        
      
        
      {/* ))} */}
      </div>
    </div>
  );
}
// export async function getServerSideProps({
//   params,
//   req,
//   res,
//   query,
//   preview,
//   previewData,
//   resolvedUrl,
//   locale,
//   locales,
//   defaultLocale,
// }) {
//   console.log("Logging : " + res);
//   const data = await axios
//     .get("http://localhost:3001/api/products/burgers", {
//       headers: {
//         token: process.env.API_KEY,
//       },
//     })
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return {
//     props: {
//       data,
//     },
//   };
// }
