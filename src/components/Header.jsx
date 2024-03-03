import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link> <br />
      <Link
        to={{
          pathname: "/user",
          search: "?sort=name",
          hash: "#hashtag",
          state: { fromDashboard: true },
        }}
      >
        User
      </Link>
      <br />
    </div>
  );
};

export default Header;
