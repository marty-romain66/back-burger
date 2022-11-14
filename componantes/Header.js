import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
  // const [datas , setDatas] = React.useState(data);
  // const [isTrue, setIsTrue] = React.useState(false);
  
  // useEffect(() => {
  //   if(datas.orderOnline  && datas.orderOnline === "1")
  //   {
  //     setIsTrue(true);
  //   } else {
  //     setIsTrue(false);
  //   }
  // }, [data]);

  const router = useRouter();
  const handleClickH = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleClickM = (e) => {
    e.preventDefault();
    router.push("/menu");
  };
const handleClickC = (e) => {
    e.preventDefault();
    router.push("/contact");
  };
  const handleClickR = (e) => {
    e.preventDefault();
    router.push("/reservation");
  };



  return (
    <header>
      <div className="title">
        <h1>Le nom de votre resto</h1>
      </div>
      <div className="navBar">
        <ul>
          <li> <a href="" onClick={handleClickH}>Accueil</a> </li>
          <li><a href="" onClick={handleClickM}>Menu</a> </li>
          {/* { isTrue?  <li><a href="" onClick={handleClickR}>Reserver en ligne</a> </li> : null } */}
         
          <li> <a href="" onClick={handleClickC}>Contact</a> </li>

        </ul>
        
      </div>
    </header>
  );
}





