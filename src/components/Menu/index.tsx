import React, { useState } from "react";
import "./styles.scss";
import { useNavigate, Link } from "react-router-dom";

export const Menu = () => {
  let navigate = useNavigate();
  const [profile, setProfile] = useState<string>("");

  return (
    <div className="menu">
      <Link to="/">
        <h1>Github Perfil views</h1>
      </Link>
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
