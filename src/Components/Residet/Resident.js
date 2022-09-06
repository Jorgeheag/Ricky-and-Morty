import React, { useEffect, useState } from "react";
import axios from "axios";

const Resident = ({ habitantes }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(habitantes).then((res) => setProfile(res.data));
  }, [habitantes]);

  const less = () =>{
    if(profile.status === "Alive"){
      return ("green")
    }else if(profile.status === "Dead") {
      return ("red")
    }else{
      return ("blue")
    }
  }

  return (
    <div className="card-residet">
      <div id="statelife">
       <div id="circle" style={{backgroundColor: less()}}></div>
       <div>{profile.status}</div>
      </div>
      
      
      <img src={profile.image} alt="" />

      <div>
        <div>
        <h1 id="nameId">{profile.name}</h1>
        </div>
      <div>
       <ul id="ulList">
         <li>
         
          Estatus: {profile.status}-{profile.species}
         </li>
         <li>Episodes: {profile.episode?.length}</li>
         <li>Species: {profile.species} </li>
       </ul>
      </div>
      
      </div>

      
    </div>
  );
};

export default Resident;
