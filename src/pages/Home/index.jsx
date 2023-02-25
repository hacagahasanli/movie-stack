import { useSelector } from "react-redux";
import { NotFound, Search } from "../../components";
import Movies from "../../components/Movies";

const Home = () => {
  const { error } = useSelector(state => state.movie)

  const visibleComponent = error?.toManyResult ? <NotFound error={error?.toManyResult} /> : <Movies />

  return <>
    <Search />
    {visibleComponent}
  </>
};

export default Home;
