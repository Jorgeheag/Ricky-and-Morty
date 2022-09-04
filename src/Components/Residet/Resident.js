import React, { useEffect, useState } from "react";
import axios from "axios";

const Resident = ({ habitantes }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(habitantes).then((res) => setProfile(res.data));
  }, [habitantes]);

  return (
    <div className="card-residet">
      
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
