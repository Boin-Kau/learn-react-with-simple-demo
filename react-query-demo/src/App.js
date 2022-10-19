/**
 * @author Charles
 * @file 받아온 영화 데이터로 영화 리스트를 보여주는 App 컴포넌트 작성 파일
 */

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Movie from "./components/Movie";
import { getNowPlayingMovies } from "./apis";
import { Pagination } from "antd";

function App() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  /**
   * 첫 번째 인자 : Query Key
   * - ["nowPlayingMovies", page]
   * - useQuery마다 부여되는 고유 Key 값
   * - Query Key에 state를 넘겨주면, 해당 state 값이 업데이트 될 때 Query Function이 refetch
   *
   * 두 번째 인자 : Query Function
   * - promise 처리가 이루어지는 함수
   * - axios를 활용한 데이터 패칭(GET) 코드가 작성됨 
   *
   * 세 번째 인자 : configuration
   * - onSuccess : query fetching 성공 시 실행할 side effect 정의
   */
  const { isLoading, error, data } = useQuery(
    ["nowPlayingMovies", page],
    () => getNowPlayingMovies(page),
    {
      onSuccess: (res) => {
        setTotal(res.total_results);
      },
    }
  );

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
        {/**
         * Ant Design의 Pagination Component 사용
         * @link https://ant.design/components/pagination/
         */}
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
