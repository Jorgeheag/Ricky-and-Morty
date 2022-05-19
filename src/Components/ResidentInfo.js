import React, { useEffect, useState } from "react";
import axios from "axios";
import Resident from "./Residet/Resident";

const ResidentInfo = () => {
  const [location, setlocation] = useState();
  const [searcH,setsearcH] = useState("")

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setlocation(res.data)); 
  }, []);

  console.log(location);

  const searchWorld = () =>{
    console.log(searcH)
    axios
      .get(`https://rickandmortyapi.com/api/location/${searcH}`)
      .then((res) => setlocation(res.data));
  }
 
  return (
    <div className="card-character">
      <div className="jorge">
        <div className="sub-title">Universe: </div><div className='result'>{location?.name} </div>
        <div className="sub-title">Dimension: </div><div className='result'>{location?.dimension} </div>
        <div className="sub-title">Population: </div><div className='result'>{location?.residents.length} </div>
      </div>  
     <div>
       <input type="text" placeholder="id for search" onChange={(e) => setsearcH(e.target.value)} value={searcH} />
       <button onClick={searchWorld}>searh</button>
     </div>
      <ul>
        {location?.residents?.map((e) => (
          <Resident habitantes={e} key={e} />
        ))}
      </ul>
    </div>
  );
};

export default ResidentInfo;
