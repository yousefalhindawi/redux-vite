import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/user.actions";

const User = () => {
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const usersState = useSelector((state) => state.user);

  const handleSort = (option) => {
    setSortOption(option);
  };

  const handleFilter = (option) => {
    setFilterOption(option);
  };

  // Apply sorting and filtering based on selected options
  let filteredUsers = usersState.users || [];
  if (filterOption) {
    filteredUsers = filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(filterOption.toLowerCase())
    );
  }

  if (sortOption === "name") {
    filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "email") {
    filteredUsers.sort((a, b) => a.email.localeCompare(b.email));
  }

  return (
    <>
      <h2>Users</h2>
      <div>
        <button onClick={() => handleSort("name")}>Sort by Name</button>
        <button onClick={() => handleSort("email")}>Sort by Email</button>
        <input
          type="text"
          placeholder="Filter by Name"
          value={filterOption}
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>
      <ul>
        {filteredUsers.length > 0 &&
          filteredUsers.map((user) => (
            <li key={user.id}>
              {user.id}- {user.name} - {user.email}
            </li>
          ))}
      </ul>
      {usersState.error && (
        <div style={{ color: "#f00" }}>{usersState.error}</div>
      )}
    </>
  );
};

export default User;
