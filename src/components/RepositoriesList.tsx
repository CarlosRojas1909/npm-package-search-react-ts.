import React, { useState } from "react";
import { UseActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelectors";
import { RootState } from "../state/reducers";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = UseActions();

  const { data, error, loading } = useSelector(
    (state: RootState) => state.repositories
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((e, index) => <li key={index}>{e}</li>)}
    </div>
  );
};
export default RepositoriesList;
