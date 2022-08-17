import "./styles.scss";
import { IRepositories } from "../../types";

interface IProps {
  repo?: [IRepositories] | undefined;
}

export const Repositories = ({ repo }: IProps) => {
  return (
    <div>
      <h3>Repositórios</h3>
      <div className="repoContainer">
        {repo?.map((repo) => (
          <div key={`${repo.name}`} className="repoItem">
            <a href={`${repo.html_url}`}>{repo.name}</a>
            <p>{repo.description}</p>
            <p>
              {repo.language} <span>{repo.stargazers_count}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
