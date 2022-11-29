import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> INI HOMEPAGE</h1>
      <ul>
        <li>
          <Link to="/post/1">Post 1</Link>
        </li>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Home;
