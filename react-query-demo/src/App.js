import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Movie from "./components/Movie";
import { getNowPlayingMovies } from "./apis";
import { Pagination } from "antd";

function App() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  const { isLoading, error, data} = useQuery(['nowPlayingMovies', page], () => getNowPlayingMovies(page), {
    onSuccess: (res) => {
      setTotal(res.total_results);
    }
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (error instanceof Error) {
    return <span>An error has occurred : {error.message}</span>;
  }
  return (
    <div>
      <div className="app-container">
        {data.results.map((item) => {
          return (
            <Movie
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
      <div className="app-pagination-wrap">
        <Pagination
          defaultCurrent={page}
          total={total}
          defaultPageSize={20}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}

export default App;
