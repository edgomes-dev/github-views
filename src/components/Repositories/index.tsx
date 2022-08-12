import { IRepositories } from "../../types";

interface IProps {
  repo?: [IRepositories] | undefined;
}

export const Repositories = ({ repo }: IProps) => {
  return (
    <div>
      <p>Teste</p>
      {repo?.map((i) => i.name)}
    </div>
  );
};
