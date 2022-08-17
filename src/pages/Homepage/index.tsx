import "./styles.scss";

import { useSelector } from "react-redux";

import * as selector from "../../redux/selectors/userHistory";

import { Menu } from "../../components/Menu";

export const Homepage = () => {
  const users = useSelector(selector.getUserHistorySelector);

  return (
    <div>
      <Menu />
      <h2>Ultimos perfil pesquisados</h2>
      <section className="profileContainer">
        {users?.map((profile) => (
          <div className="profileItem">
            <div>
              <p>{profile.name}</p>
              <p>{profile.login}</p>
              <p>{profile.location}</p>
            </div>
            <img
              src={`${profile.avatar_url}`}
              alt="Imagem do perfil no github"
            />
          </div>
        ))}
      </section>
    </div>
  );
};
