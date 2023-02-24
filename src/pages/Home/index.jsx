import { useSelector } from "react-redux";
import { NotFound, Search } from "../../components";
import Movies from "../../components/Movies";

const Home = () => {
  const { error: { toManyResult } } = useSelector(state => state.movie)

  const visibleComponent = toManyResult ? <NotFound error={toManyResult} /> : <Movies />

  return <>
    <Search />
    {visibleComponent}
  </>
};

export default Home;
