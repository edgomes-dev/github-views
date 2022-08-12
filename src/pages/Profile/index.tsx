import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest } from "../../redux";
import { Repositories } from "../../components/Repositories";
import "./styles.scss";
import * as selector from "../../redux/selectors/user";

export const Profile = () => {
  const dispatch = useDispatch();
  const pending = useSelector(selector.getPendingSelector);
  const user = useSelector(selector.getUserSelector);
  const error = useSelector(selector.getErrorSelector);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  const [repo, setRepo] = useState();
  axios.get(`${user.repos_url}`).then((response) => setRepo(response.data));

  return (
    <div className="container">
      {pending ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <main>
          <div>
            <img src={`${user.avatar_url}`} alt="Imagem do perfil" />
            <div>
              <p>{user.name}</p>
              <p>{user.bio}</p>
              {user.blog ? <p>{user.blog}</p> : undefined}
              <p>{user.location}</p>
              <p>Perfil criado em: {user.created_at}</p>
              <p>Utima atualização em: {user.updated_at}</p>
            </div>
            <div>
              <h2>Repositórios</h2>
              <Repositories repo={repo} />
            </div>
          </div>
        </main>
      )}
    </div>
  );
};
