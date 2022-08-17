import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserRequest } from "../../redux";
import "./styles.scss";
import * as selector from "../../redux/selectors/user";

import { Menu } from "../../components/Menu";
import { Repositories } from "../../components/Repositories";

export const Profile = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const pending = useSelector(selector.getPendingSelector);
  const user = useSelector(selector.getUserSelector);
  const error = useSelector(selector.getErrorSelector);

  useEffect(() => {
    dispatch(fetchUserRequest(id));
  }, [id]);

  const [repo, setRepo] = useState();
  axios.get(`${user.repos_url}`).then((response) => setRepo(response.data));

  return (
    <div className="container">
      <Menu />
      {pending ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <main>
          <div className="information">
            <img src={`${user.avatar_url}`} alt="Imagem do perfil" />
            <div>
              <p>{user.name}</p>
              <p>{user.login}</p>
              <p>{user.bio}</p>
              {user.blog ? <p>{user.blog}</p> : undefined}
              <p>{user.location}</p>
              <p>Perfil criado em: {user.created_at}</p>
              <p>Utima atualização em: {user.updated_at}</p>
            </div>
          </div>
          <div>
            <Repositories repo={repo} />
          </div>
        </main>
      )}
    </div>
  );
};
