import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";
import { useState } from "react";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavourite, removeFavourite } = useActions();

  const { favourites } = useAppSelector((state) => state.github);

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true);
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFav(false);
    removeFavourite(repo.html_url);
  };

  return (
    <div className=" border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h3 className=" text-lg font-bold">{repo.full_name}</h3>
        <p className=" text-sm">
          Watchers: <span className=" font-bold mr-2">{repo.watchers}</span>
          Forks: <span className=" font-bold">{repo.forks}</span>
        </p>
        <p className=" text-sm">{repo?.description}</p>
        {!isFav && (
          <button
            className=" mt-2 px-3 py-2 bg-yellow-300 font-bold rounded hover:shadow-md transition-all"
            onClick={addToFavorites}
          >
            Add
          </button>
        )}
        {isFav && (
          <button
            className=" mt-2 px-3 py-2 font-bold bg-red-300 rounded hover:shadow-md transition-all"
            onClick={removeFromFavourite}
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
};

export default RepoCard;
