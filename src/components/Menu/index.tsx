import React, { useState } from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  let navigate = useNavigate();
  const [profile, setProfile] = useState<string>("");

  return (
    <div className="menu">
      <h1>Github Perfil views</h1>
      <form onSubmit={(e) => navigate(`/profile/${profile}`)}>
        <input
          type="search"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Procure por uma perfil"
        />
        <button type="submit">Procurar</button>
      </form>
    </div>
  );
};
