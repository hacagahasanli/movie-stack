import { useSelector } from "react-redux";
import { Search } from "../../components";
import Movies from "../../components/Movies";

const Home = () => {
  const { error } = useSelector(state => state.movie)
  return <>
    <Search />
    {error?.Error ? <h2>{error?.Error}</h2> : <Movies />}
  </>
};

export default Home;
